(ns asgnx.commands.unregister 
  (:require [clojure.string :as string]
			[asgnx.kvstore :as kvstore]
			[asgnx.models.users :as users]
	)
)


(defn handler [state pmsg]
	(if (nil? state)
		[[] "You are not a registered user of this application."]

		;; at this point, we know for sure that the user has registered at some point
		[[(users/delete (:user_id pmsg))] "Successfully unregistered. Goodbye :("]
	)
)