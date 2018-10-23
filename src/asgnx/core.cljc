(ns asgnx.core
  (:require [clojure.string :as string]
            [clojure.core.async :as async :refer [go chan <! >!]]
            [asgnx.kvstore :as kvstore
			 :refer [put! get! list! remove!]]

            [asgnx.actions :as actions]

			[asgnx.locations :refer [dining-locations]]

			[asgnx.parser :as parser]

			[asgnx.commands.wait :as wait]
			[asgnx.commands.register :as register]
			[asgnx.commands.unregister :as unregister]
			[asgnx.commands.report :as report]
			[asgnx.commands.halp :as halp]

			[asgnx.models.locations :as locations]
			[asgnx.models.users :as users]
	)
)

(def initial-locations 
	[
		:rand			
		:ebronson		
		:commons		
		:grins			
		:2301			
		:pub			
		:frothy			
	]
)


;; Don't edit!
(defn stateless [f]
  (fn [_ & args]
    [[] (apply f args)]))

(def help-str
	"Invalid command.\n\nwait - lists wait times\nreport - reports wait time\nregister - registers a new user\nunregister - unregisters a user (PERMANANT)"
)

;; Here are the routes I defined for the program
(def routes 
	{
		"default"  		(stateless (fn [& args] help-str))
		"halp"			halp/handler
		"wait" 			wait/handler	
		"report"		report/handler
		"register" 		register/handler
		"unregister" 	unregister/handler
	}
)

(defn get-all-locations [state-mgr pmsg]
	(locations/get-all state-mgr)
)


(defn get-location [state-mgr pmsg]
	(let [ 	args (:args pmsg)
			location (get args 0)]
		(if (nil? location)
			nil
			(locations/get-one state-mgr location)
		)
	)
)

(defn get-all-users [state-mgr pmsg]
	(users/get-all state-mgr)
)

(defn get-user [state-mgr pmsg]
	(users/get-one state-mgr (:user-id pmsg))
)

;; Don't edit!
(def queries
	{
		"wait"			get-all-locations
		"report" 		get-location
		"register" 		get-user
		"unregister" 	get-user
	}
)


;; Don't edit!
(defn read-state [state-mgr pmsg]
  (go
    (if-let [qfn (get queries (:cmd pmsg))]
      (<! (qfn state-mgr pmsg))
      {})))


;; Asgn 1.
;;
;; @Todo: This function should return a function (<== pay attention to the
;; return type) that takes a parsed message as input and returns the
;; function in the `routes` map that is associated with a key matching
;; the `:cmd` in the parsed message. The returned function would return
;; `welcome` if invoked with `{:cmd "welcome"}`.
;;
;; Example:
;;
;; (let [msg {:cmd "welcome" :args ["bob"]}]
;;   (((create-router {"welcome" welcome}) msg) msg) => "Welcome bob"
;;
;; If there isn't a function in the routes map that is mapped to a
;; corresponding key for the command, you should return the function
;; mapped to the key "default".
;;
;; See the create-router-test in test/asgnx/core_test.clj for the
;; complete specification.
;;
(defn create-router [routes]
	(fn [{:keys [cmd args]}]
		(let [route (get routes cmd)]
			(if (nil? route)
				(get routes "default")
				route
			)
		)
	)
)

;; Don't edit!
(defn output [o]
  (second o))


;; Don't edit!
(defn actions [o]
  (first o))


;; Don't edit!
(defn invoke [{:keys [effect-handlers] :as system} e]
  (go
    (println "    Invoke:" e)
    (if-let [action (get effect-handlers (:action e))]
      (do
        (println "    Invoking:" action "with" e)
        (<! (action system e))))))


;; Don't edit!
(defn process-actions [system actions]
  (go
    (println "  Processing actions:" actions)
    (let [results (atom [])]
      (doseq [action actions]
        (let [result (<! (invoke system action))]
          (swap! results conj result)))
	  @results)))
	
	

;; Don't edit!
(defn handle-message
  "
    This function orchestrates the processing of incoming messages
    and glues all of the pieces of the processing pipeline together.

    The basic flow to handle a message is as follows:

    1. Create the router that will be used later to find the
       function to handle the message
    2. Parse the message
    3. Load any saved state that is going to be needed to process
       the message (e.g., querying the list of experts, etc.)
    4. Find the function that can handle the message
    5. Call the handler function with the state from #3 and
       the message
    6. Run the different actions that the handler returned...these actions
       will be bound to different implementations depending on the environemnt
       (e.g., in test, the actions aren't going to send real text messages)
    7. Return the string response to the message

  "
  [{:keys [state-mgr] :as system} src msg]
  (go
    (println "=========================================")
	(println "  Processing:\"" msg "\" from" src)
    (let [
		rtr    		(create-router routes)
        _      		(println "  Router:" rtr)
        pmsg   		(assoc (parser/parsed-msg msg) :user-id src)
        _      		(println "  Parsed msg:" pmsg)
        state  		(<! (read-state state-mgr pmsg))
        _      		(println "  Read state:" state)
        hdlr   		(rtr pmsg)
        _      		(println "  Hdlr:" hdlr)
        [as o] 		(hdlr state pmsg)
		_      		(println "  Hdlr result:" [as o])
        arslt  		(<! (process-actions system as))
        _      		(println "  Action results:" arslt)]
      (println "=========================================")
	  o		
	  
	  )))
