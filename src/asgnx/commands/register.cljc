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
			loc-keywords (vec (map keyword locations))
			new-status 	{ :status :choosing-times :location-preferences loc-keywords}
			user-id (:user-id pmsg)	
			msg 	(str "Selected: " (string/join "\n" locations) "\nEnter the time of day you want to be notified")]

		(println "$$$$$$$$$$$$$$$$$$$$$$$$$$$$ \n\n" (count locations))
		(if (= 0 (count locations))
			[[] "You must choose at least one valid dining location."]
			[[(users/update-one user-id new-status)] msg]
		)
	)
)

(defn choose-times [state pmsg]
	[[] "choosing times"]
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
