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

(defn begin-registration [state pmsg]
	(let [usr (:user-id pmsg)
		msg-str (string/join "\n" ["Choose which dining locations to receive updates about:\n" (dining-locations/loc-str)])]
		[[(users/insert usr new-user)] msg-str]
	)
)

(defn choose-locations [state pmsg]
	[[] "choosing locations"]
)

(defn choose-times [state pmsg]
	[[] "choosing times"]
)

(defn handler [state pmsg]
	(cond 
		;; if the state is nil, there is not a user for the
		;; current number
		(nil? state) (begin-registration state pmsg)

		;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
		;; either they have already registered, or they are in the process of registering
		;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

		;; let's check if the user is alreay registered - if they are, we do nothing
		(= (:status state) :registered) 			[[] "You are already registered."]

		(= (:status state) :choosing-location) 		(choose-locations state pmsg)

		(= (:status state) :choosing-times) 		(choose-times state pmsg)

		:else [[] "You should not see this message :("]
	)
)
