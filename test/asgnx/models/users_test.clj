(ns asgnx.models.users-test
  (:require [clojure.test :refer :all]
			[clojure.core.async :refer [<!!]]
            [clojure.core.async :as async :refer [go chan <! >!]]
            [clojure.spec.alpha :as s]
            [clojure.spec.test.alpha :as stest]
            [clojure.test.check.generators :as gen]
			[asgnx.kvstore :as kvstore :refer [put! get!]]
			[asgnx.actions :as actions]
			[asgnx.models.users :as users]
	)
)

(def state-dict
	{ :users
		{ 	"+15037087892" "great chicken strips" 
			:rand "long long lines" } 
	}
)

(deftest get-all-test-empty
  	(testing "get-all on an empty state"
    	(let	[
         	state  (atom {})
          	smgr   (kvstore/create state)]
			(go
				(is (= nil (<! (users/get-all smgr))))
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
				(is (= (:users state-dict) (<! (users/get-all smgr))))
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
				(is (= nil (<! (users/get-one smgr "+15037087892"))))
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
				(is (= "great chicken strips" (<! (users/get-one smgr "+15037087892"))))
			)
  		)
	)
)

(deftest update-one-test
	  (testing "testing update-one"
		(is (= {:action :assoc-in :ks [:users "+15037087892"] :v "new value"}
				(users/update-one "+15037087892" "new value"))
		)
	)
)


(deftest delete-test
	(testing "testing delete-one"
		(is (= {:action :dissoc-in :ks [:users :pub] }
				(users/delete :pub ))
		)
	)
)