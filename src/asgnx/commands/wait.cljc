(ns asgnx.commands.wait
  (:require [clojure.string :as string]
			[asgnx.kvstore :as kvstore]
			[asgnx.estimation :as estimation]
			[asgnx.actions :as actions]
	        [asgnx.helpers :as helpers]
		
))

(defn location-to-string-1 [loc]
	(if (nil? loc)
		"No wait times reported."
		(string/join [(str loc) "min"])
	)
)

(defn location-to-string [loc] 
	(string/join [(name (first loc)) ": " (location-to-string-1 (second loc))])
)

(defn locations-to-string [state]
	(let [str-rep (map location-to-string state)
			full-str (string/join "\n" str-rep)]
		(string/join "\n" str-rep)
	)
)

(defn loc-to-string [loc time]
	(str "The wait at " loc " is " time "min.")
)

(defn handler [time pmsg]
	(let [ 	args 	(:args pmsg)
			loc 	(first args)	]
		(cond 
			(nil? loc) [[] "usage: wait <location>"]

			(helpers/invalid-location loc) [[] helpers/invalid-location-msg]

			(nil? time)  [[] "No wait times have been reported."]

			:else [[] (loc-to-string loc time)]
			)
	)
)