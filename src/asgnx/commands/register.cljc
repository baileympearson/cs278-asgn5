(ns asgnx.commands.register 
  (:require [clojure.string :as string]
			[asgnx.kvstore :as kvstore]
			[asgnx.models.users :as users]
			[asgnx.locations :as dining-locations]
  )
)

(def new-user
	{
		:status :choosing-location
	}
)

(defn member?
	"I'm still amazed that Clojure does not provide a simple member function.
	 Returns true if `item` is a member of `series`, else nil."
	[series item]
	(and (some #(= item %) series) true))

(defn begin-registration [state pmsg]
	(let [usr (:user-id pmsg)
		msg-str (string/join "\n" ["Choose which dining locations to receive updates about:\n" (dining-locations/loc-str)])]
		[[(users/insert usr new-user)] msg-str]
	)
)


(defn location-filter [loc]
	(member? dining-locations/dining-locations loc)
)

(defn filter-locations [locations]
	(filter location-filter locations)
	)


(defn choose-locations [state pmsg]
	(let [ 	locations (filter-locations (:args pmsg))
			; loc-keywords (vec (map keyword locations))
			new-status 	{ :status :choosing-times :location-preferences locations}
			user-id (:user-id pmsg)	
			msg 	(str "Selected: " (string/join "\n" locations) "\nEnter the time of day you want to be notified")]

		(if (= 0 (count locations))
			[[] "You must choose at least one valid dining location."]
			[[(users/update-one user-id new-status)] msg]
		)
	)
)

(defn str->int [s]
	#?(:clj  (java.lang.Integer/parseInt s)
	   :cljs (js/parseInt s)))

(defn split-time [time]
	(let [ret (string/split time #":")
			hours 	(str->int (first ret))
			minutes (str->int (second ret))]
		{:hours hours :minutes minutes}
	)
)

(defn build-day-map [times]
	{
		:mon (get times 0)
		:tue (get times 1)
		:wed (get times 2)
		:thu (get times 3)
		:fri (get times 4)
	}
)

(defn choose-times [state pmsg]
	(let [	split-times 	(vec (map split-time (:args pmsg))) 
			time-prefs 		(build-day-map split-times)	
			user-id 		(:user-id pmsg)		
			new-status 		{ :status :registered :time-preferences time-prefs :location-preferences (:location-preferences state)}
			]
	[ [(users/update-one user-id new-status)] "Successfully registered."]
	)
)

(defn handler [user pmsg]
	(cond 
		;; if the state is nil, there is not a user for the
		;; current number
		(nil? user ) (begin-registration user pmsg)

		;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
		;; either they have already registered, or they are in the process of registering
		;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

		;; let's check if the user is alreay registered - if they are, we do nothing
		(= (:status user) :registered) 				[[] "You are already registered."]

		(= (:status user) :choosing-location) 		(choose-locations user pmsg)

		(= (:status user) :choosing-times) 			(choose-times user pmsg)

		:else [[] "You should not see this message :("]
	)
)
