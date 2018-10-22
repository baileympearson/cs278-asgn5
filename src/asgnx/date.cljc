(ns asgnx.date
	#?(:clj  (:require [clj-time.core :as t])
		   :cljs (:require [cljs.nodejs :as nodejs]
 				)
		)
)

(def days 
{ 	"1"  	"mon"
	"2" 	"tue"
	"3"  	"wed"
	"4"  	"thu"
	"5"  	"fri"
	"6"  	"sat" 
	"7"  	"sun"
  }
)

(defn get-today []
  #?(:clj 	(.toString (t/today))
     :cljs 	(t/format (new Date) "YYYY-MM-DD")
  )
)

(defn get-date-time []
  (let [today (t/now)
        year (t/year today)
        month (t/month today)
        day (t/day today)]
  		(println year month day)))
