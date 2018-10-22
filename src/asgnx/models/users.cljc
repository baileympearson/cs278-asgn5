(ns asgnx.models.users
	"
	Provides an easy user interface to deal the 'db' used in kvstore.
	Each user has the following structure:
		{ ... 	
			phone-number { 
				:status ____
				:location-pref [ list of dining locations ]
				:alert-times { :monday _____ .... :friday _____ }
			}
		}
	"
	(:require 
            [asgnx.kvstore :as kvstore
			 :refer [put! get! list! remove!]]
			[asgnx.actions :as actions]
	)
)


(defn get-all [state]
	(get! state [:users])
)


(defn get-one [state user_id]
	(get! state [:users user_id])
)

(defn insert [user-id data]
	(actions/insert [:users user-id] data)
)

(defn update-one
	([user_id new-data] 		(actions/insert [:users user_id] new-data))
	([user_id field new-data] (actions/insert [:users user_id field] new-data))
)

(defn delete [user_id]
	(actions/delete [:users user_id])	
)
