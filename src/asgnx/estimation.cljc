(ns asgnx.estimation
	"
		This module is responsible for managing the wait times associated with campus
		dining locations.  Wait times for each dining location are stored as a list of
		maps in the following structure:

				{
					:locations { 
						:pub [
							{ date [ wait times] } ...
						] 
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
	)
)


(defn add-wait [location wait]
	)

(defn get-wait-loc [location]
	)

(defn get-wait []
	)

(defn update-wait-loc [location]
	)

(defn update-wait []
	)