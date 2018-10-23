(ns asgnx.models.locations
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
  			[clojure.string :as string]
	)
)

(def dining-locations
	[
		"rand"
		"ebronson"
		"commons"
		"grins"
		"2301"
		"pub"
		"frothy"
	]
)

(defn validate-location [location]
	(let [loc (string/lower-case location)]
		(contains? dining-locations loc)
	)
)

(defn get-all [state]
	(println "GETTING STATE")
	(get! state [:locations])
)


(defn get-one [state location]
	(get! state [:locations location])
)

(defn update-one ([location new-data] 		
	(actions/insert [:locations location] new-data))
)

(defn delete [location]
	(actions/delete [:locations (keyword location)])	
)
