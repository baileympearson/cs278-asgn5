(ns asgnx.commands.report
  (:require [clojure.string :as string]
            [asgnx.kvstore :as kvstore]
            [asgnx.locations :as dining-locations]
            [asgnx.models.locations :as locations]
			[asgnx.estimation :as estimation]
	)
)

(def invalid-location-msg 
	(str
		"Invalid location.  Valid locations are:\n"
		(string/join "\n" dining-locations/dining-locations)
	)
)

(def time-regex #"\d\d?")

;; maximum wait time in minutes
(def max-wait-time 60)

;; validate-time
;; @brief returns the time represented in 
(defn validate-time [time]
	(let [match (re-matches time-regex time)]
		(if (nil? match)
			nil
			(if (> (read-string match) max-wait-time)
				nil
				(read-string match)
			)
		)
	)
)

(defn handler [state pmsg]
	(let 
		[	args (:cmd pmsg)
			location (get args 0)
			time (get args 1)]

		(cond 

			; were there args at all?
			(= (count args) 0) [[] "usage: report <location> <time in minutes>"]

			; was there only a location?
			(= (count args) 1) [[] "usage: report <location> <time in minutes>"]

			; did the user send a location that doesn't exist?
			(nil? state) [[] invalid-location-msg]

			; did the user give a valid time?
			(= false (validate-time time)) [[] (str "Invalid time.  Must specify a time in minutes between 0 and " max-wait-time)]

			:else [[(estimation/add-wait location (read-string time))] "Successfully recorded wait time. Thanks :)"]

			)
		)
)