(ns asgnx.commands.report-test
  (:require [clojure.test :refer :all]
			[clojure.core.async :refer [<!!]]
            [clojure.core.async :as async :refer [go chan <! >!]]
            [clojure.spec.alpha :as s]
            [clojure.spec.test.alpha :as stest]
			[clojure.test.check.generators :as gen]
			[asgnx.core :refer :all]
			[asgnx.kvstore :as kvstore :refer [put! get!]]
			[asgnx.actions :as actions]
			[asgnx.commands.report :as report]
	)
)

(deftest validate-time-test
  	(testing "testing report/validate-time"
		(is (= nil (report/validate-time "")))
		(is (= 15 (report/validate-time "15")))
		(is (= 33 (report/validate-time "33")))
		(is (= nil (report/validate-time "333")))

		;; maxtime is the threshhold
		(is (= nil (report/validate-time "61")))
		(is (= 60 (report/validate-time "60")))
	)
)

(defn action-send [system {:keys [to msg]}]
  (put! (:state-mgr system) [:msgs to] msg))

(defn pending-send-msgs [system to]
  (get! (:state-mgr system) [:msgs to]))

(def send-action-handlers
  {:send action-send})

(defn print-locations [system]
	(println "\nRAAAAAAAAAAAAYEEEEEYAAAAAA")
	(println (<!! (get! (:state-mgr system) [:locations])))
	(println "RAAAAAAAAAAAAYEEEEEYAAAAAA")
	)

(defn get-locations [system]
		(<!! (get! (:state-mgr system) [:locations]))
	)

(defn print-users [system]
	(println "\nRAAAAAAAAAAAAYEEEEEYAAAAAA")
	(println (<!! (get! (:state-mgr system) [:users])))
	(println "RAAAAAAAAAAAAYEEEEEYAAAAAA")
	)

(defn get-users [system]
		(<!! (get! (:state-mgr system) [:users]))
	)

(deftest report-test
  (testing "the integration and handling of messages"
    (let [ehdlrs (merge
                   send-action-handlers
                   kvstore/action-handlers)
          state  (atom {})
          smgr   (kvstore/create state)
          system {:state-mgr smgr
				  :effect-handlers ehdlrs}]

		(is (= (get-locations system)
				nil
			))
		
				
		(is (= "usage: report <location> <time in minutes>"
             (<!! (handle-message
                    system
                    "test-user"
					"report "))))

		(is (= "usage: report <location> <time in minutes>"
             (<!! (handle-message
                    system
                    "test-user"
					"report rand"))))

		(is (= report/invalid-location-msg
             (<!! (handle-message
                    system
                    "test-user"
					"report banana 15"))))


		
	
		(print-locations system)

	)
	)
)