(ns asgnx.helpers 
	(:require 
		[asgnx.locations :as dining-locations]
		[clojure.string :as string]
		)
	)

(def invalid-location-msg 
	(str
		"Invalid location.  Valid locations are:\n"
		(string/join "\n" dining-locations/dining-locations)
	)
)

(defn member?
	"I'm still amazed that Clojure does not provide a simple member function.
	 Returns true if `item` is a member of `series`, else nil."
	[series item]
	(and (some #(= item %) series) true))

(defn valid-location [loc] 
	(member? dining-locations/dining-locations loc) 
)

(defn invalid-location [loc]
	(not (valid-location loc))
)