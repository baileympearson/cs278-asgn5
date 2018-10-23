(ns asgnx.commands.wait
  (:require [clojure.string :as string]
			[asgnx.kvstore :as kvstore]
			[asgnx.estimation :as estimation]
			[asgnx.actions :as actions]
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

(defn handler [state pmsg]
	(println "PMSG" pmsg)
	(if (nil? state)
		[[] "No wait times have been reported."]

		;; at this point, we know for sure that the user has registered at some point
		[[] (locations-to-string state)]
	)
)