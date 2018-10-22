(ns asgnx.estimation
	"
		This module is responsible for managing the wait times associated with campus
		dining locations.  Wait times for each dining location are stored as a list of
		maps in the following structure:

				{
					:locations { 
						:pub 
							{ date [ wait times] } ...

						(all dining locations here)
					}
				}
				
				:date is a date/time object associated with the time of reporting
				:wait is the actual wait time reported
		
		Each day, the wait times are cleared for each dining location.
	"
  	(:require [clojure.string :as string]
             [asgnx.kvstore :as kvstore]
             [asgnx.locations :refer [dining-locations]]
			 [asgnx.date :as date]
				[asgnx.models.locations :as locations]
				[asgnx.actions :as actions]
         			 )
)


(defn add-wait [state location wait]
	(locations/update-one location wait)
)

(defn get-wait-loc [state location]
	)

(defn get-wait [state]
	)

;; update-wait
;; @brief resets all the wait times to zero.
(defn update-wait []
	)