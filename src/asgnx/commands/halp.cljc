(ns asgnx.commands.halp
  	(:require [clojure.string :as string]
	)
)


(defn handler [state pmsg]
	[
		[] 
		(string/join "\n" [
			"Valid Commands:"
			"  halp"
			"  register"
			"  unregister"
			"  wait <location>"
			"  report <location> <time>"
		])
	]
)