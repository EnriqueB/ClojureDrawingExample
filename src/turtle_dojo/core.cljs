(ns turtle-dojo.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  (q/background 0)
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:color 0
   :angle 0
   :lastPosX 0
   :lastPosY 0
   :posX 0
   :posY 0
   :width 1})

(defn update-state [state]
  ; Update sketch state by changing line color and position.
  {:color (mod (+ (:color state) 0.7) 255)
   :angle (+ (:angle state) 0.1)
   :lastPosX (:posX state)
   :lastPosY (:posY state)
   :posX (q/mouse-x)
   :posY (q/mouse-y)
   :width (cond
           (= (q/key-as-keyword) :up) (+ (:width state) 0.5) 
           (= (q/key-as-keyword) :down) (if (< (- (:width state) 0.5) 1) 1 (- (:width state) 0.5)) 
           :else (:width state))})



(defn draw-state [state]
  ;Define width and color of the line 
  (q/stroke (:color state) 255 255)
  (q/stroke-weight (:width state))
  (let [angle (:angle state)
        x (:posX state)
        y (:posY state)
        oldX (:lastPosX state)
        oldY (:lastPosY state)]
  ; Move origin point to the center of the sketch.
   (q/with-translation [(/ (q/width) 2)
                        (/ (q/height) 2)])
  ;Draw the line.
   (if (q/mouse-pressed?) (q/line x y oldX oldY))))
  
(q/defsketch turtle-dojo
  :host "turtle-dojo"
  :size [900 900]
  ; setup function called only once, during sketch initialization.
  :setup setup
  ; update-state is called on each iteration before draw-state.
  :draw draw-state
  :update update-state
  ; This sketch uses functional-mode middleware.
  ; Check quil wiki for more info about middlewares and particularly
  ; fun-mode.
  :middleware [m/fun-mode])
