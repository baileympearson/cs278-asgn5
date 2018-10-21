(ns asgnx.commands.wait
  (:require [clojure.string :as string]
			[asgnx.kvstore :as kvstore]
			[asgnx.estimation :as estimation]
))


(defn wait-hello-world []
	(println "hello world from wait module")
		)