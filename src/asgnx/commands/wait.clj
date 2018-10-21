(ns asgnx.commands.wait
  (:require [clojure.string :as string]
            [asgnx.kvstore :as kvstore]
))


(defn wait-hello-world []
	(println "hello world from wait module")
		)