(ns asgnx.locations
	(:require [clojure.string :as string])
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

(defn loc-str [] 
	(string/join "\n" dining-locations)
)