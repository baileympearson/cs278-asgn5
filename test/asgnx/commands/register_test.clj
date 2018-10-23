(ns asgnx.commands.register-test 
  (:require [clojure.test :refer :all]
            [clojure.core.async :refer [<!!]]
            [clojure.spec.alpha :as s]
            [clojure.spec.test.alpha :as stest]
            [clojure.test.check.generators :as gen]
			[asgnx.core :refer :all]
			[asgnx.parser :as parser]
			[asgnx.kvstore :as kvstore :refer [put! get!]]
			[asgnx.actions :as actions]
			[asgnx.commands.report :as report]
			[asgnx.commands.register :as register]
	)
)

(deftest filter-location-test
  (testing "only valid locations are filtered out"
	(is (= '() (register/filter-locations [])))
	(is (= '("rand") (register/filter-locations ["rand"])))
	(is (= '("rand" "frothy") (register/filter-locations ["rand" "frothy"])))
	(is (= '("rand" "frothy") (register/filter-locations ["rand" "frothy" "banana"])))
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

(deftest handle-message-test
  (testing "the integration and handling of messages"
    (let [ehdlrs (merge
                   send-action-handlers
                   kvstore/action-handlers)
          state  (atom {})
          smgr   (kvstore/create state)
          system {:state-mgr smgr
				  :effect-handlers ehdlrs}]
				
		(is (= "Choose which dining locations to receive updates about:\n\nrand\nebronson\ncommons\ngrins\n2301\npub\nfrothy"
             (<!! (handle-message
                    system
                    "test-user"
					"register"))))

		(is (= (get-users system)
				{"test-user" { :status :choosing-location }}
			))

		;; register another user at the same time
		(is (= "Choose which dining locations to receive updates about:\n\nrand\nebronson\ncommons\ngrins\n2301\npub\nfrothy"
             (<!! (handle-message
                    system
                    "test-user2"
					"register"))))

		(is (= (get-users system)
				{"test-user" { :status :choosing-location }
					"test-user2" { :status :choosing-location }}
			))

		;; register another user at the same time
		(is (= "Selected: rand\nfrothy\nEnter the time of day you want to be notified"
             (<!! (handle-message
                    system
                    "test-user"
					"register rand frothy"))))

		(is (= (get-users system)
				{	"test-user" 	{ :status :choosing-times :location-preferences [:rand :frothy]}
					"test-user2" 	{ :status :choosing-location }}
			))

		;; register another user at the same time
		(is (= "You must choose at least one valid dining location."
             (<!! (handle-message
                    system
                    "test-user2"
					"register banana"))))

		(is (= (get-users system)
				{	"test-user" 	{ :status :choosing-times :location-preferences [:rand :frothy]}
					"test-user2" 	{ :status :choosing-location }}
			))

		;; register another user at the same time
		(is (= "Successfully unregistered. Goodbye :("
             (<!! (handle-message
                    system
                    "test-user2"
					"unregister"))))

		(is (= (get-users system)
				{	"test-user" 	{ :status :choosing-times :location-preferences [:rand :frothy]}}
			))

		
		(print-users system)

	)
	)
)