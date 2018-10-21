(ns asgnx.commands.report-test
  (:require [clojure.test :refer :all]
			[clojure.core.async :refer [<!!]]
            [clojure.core.async :as async :refer [go chan <! >!]]
            [clojure.spec.alpha :as s]
            [clojure.spec.test.alpha :as stest]
            [clojure.test.check.generators :as gen]
			[asgnx.kvstore :as kvstore :refer [put! get!]]
			[asgnx.actions :as actions]
			[asgnx.commands.report :as report]
	)
)

(deftest validate-time-test
  	(testing "testing report/validate-time"
		(is (= nil (report/validate-time "")))
		(is (= 3 (report/validate-time "3")))
		(is (= 33 (report/validate-time "33")))
		(is (= nil (report/validate-time "333")))

		;; maxtime is the threshhold
		(is (= nil (report/validate-time "61")))
		(is (= 60 (report/validate-time "60")))
	)
)