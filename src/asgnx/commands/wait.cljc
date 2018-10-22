(ns asgnx.commands.wait
  (:require [clojure.string :as string]
			[asgnx.kvstore :as kvstore]
			[asgnx.estimation :as estimation]
))

(defn location-to-string-1 [loc]
	(if (nil? loc)
		"No wait times reported."
		(string/join (str loc) "m")
	)
)

(defn location-to-string [loc] 
	(string/join (name (first loc)) ": " (location-to-string-1 (second loc)))
)

(defn locations-to-string [state]
	(let [str-rep (map location-to-string state)]
		(println "***************** STRING REPS" str-rep)
		(string/join "\n" str-rep)
	)
)

(defn handler [state pmsg]
	(println "*********** STATE" state)
	[[] (locations-to-string state)]
)