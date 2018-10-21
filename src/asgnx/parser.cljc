(ns asgnx.parser
	(	
		:require [clojure.string :as string]
	)
)


;; This is a helper function that you might want to use to implement
;; `cmd` and `args`.
(defn words [msg]
  	(if msg
    	(string/split msg #" ")
		[]
	)
)

;; Asgn 1.
;;
;; @Todo: Fill in this function to return the first word in a text
;; message.
;;
;; Example: (cmd "foo bar") => "foo"
;;
;; See the cmd-test in test/asgnx/core_test.clj for the
;; complete specification.
;;
(defn cmd [msg]
	(get (words msg) 0)
)

;; Asgn 1.
;;
;; @Todo: Fill in this function to return the list of words following
;; the command in a text message.
;;
;; Example: (args "foo bar baz") => ("bar" "baz")
;;
;; See the args-test in test/asgnx/core_test.clj for the
;; complete specification.
;;
(defn args [msg]
	(vec (rest (words msg)))
)

;; Asgn 1.
;;
;; @Todo: Fill in this function to return a map with keys for the
;; :cmd and :args parsed from the msg.
;;
;; Example:
;;
;; (parsed-msg "foo bar baz") => {:cmd "foo" :args ["bar" "baz"]}
;;
;; See the parsed-msg-test in test/asgnx/core_test.clj for the
;; complete specification.
;;
(defn parsed-msg [msg]
	(let [lwr_msg (string/lower-case msg)]
		{	
			:cmd (cmd lwr_msg), 
			:args (args lwr_msg)
		}
	)
)
