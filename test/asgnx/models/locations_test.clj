(ns asgnx.models.locations-test
  (:require [clojure.test :refer :all]
			[clojure.core.async :refer [<!!]]
            [clojure.core.async :as async :refer [go chan <! >!]]
            [clojure.spec.alpha :as s]
            [clojure.spec.test.alpha :as stest]
            [clojure.test.check.generators :as gen]
			[asgnx.kvstore :as kvstore :refer [put! get!]]
			[asgnx.actions :as actions]
			[asgnx.models.locations :as locations]
	)
)

(def state-dict
	{ :locations 
		{ 	:pub "great chicken strips" 
			:rand "long long lines" } 
	}
)

(deftest get-all-test-empty
  	(testing "get-all on an empty state"
    	(let	[
         	state  (atom {})
          	smgr   (kvstore/create state)]
			(go
				(is (= nil (<! (locations/get-all smgr))))
			)
  		)
	)
)

(deftest get-all-test
  	(testing "get-all on a regular state"
    	(let	[
         	state  (atom state-dict)
          	smgr   (kvstore/create state)]
			(go
				(is (= (:locations state-dict) (<! (locations/get-all smgr))))
			)
  		)
	)
)

(deftest get-one-test-empty
  	(testing "get-one on an empty state"
    	(let	[
         	state  (atom {})
          	smgr   (kvstore/create state)]
			(go
				(is (= nil (<! (locations/get-one smgr :pub))))
			)
  		)
	)
)

(deftest get-one-test
  	(testing "get-one on a non-empty state"
    	(let	[
         	state  (atom state-dict)
          	smgr   (kvstore/create state)]
			(go
				(is (= "great chicken strips" (<! (locations/get-one smgr :pub))))
			)
  		)
	)
)

(deftest update-one-test
	  (testing "testing update-one"
		(is (= {:action :assoc-in :ks [:locations :pub] :v "new value"}
				(locations/update-one :pub "new value"))
		)
	)
)

(deftest delete-test
	(testing "testing delete-one"
		(is (= {:action :dissoc-in :ks [:locations :pub] }
				(locations/delete :pub ))
		)
	)
)