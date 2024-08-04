"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[50909],{21780:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>m,data:()=>p});var i=o(64516);const s=(0,i.Lk)("h1",{id:"lidl-psbzs-a1",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#lidl-psbzs-a1"},[(0,i.Lk)("span",null,"Lidl PSBZS A1")])],-1),l=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1),a=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"PSBZS A1")],-1),c=(0,i.Lk)("td",null,"Vendor",-1),u=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Parkside smart watering timer")],-1),d=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"battery, switch (state), timer, time_left, frost_lock, reset_frost_lock, schedule_mode, schedule_periodic, schedule_weekday, schedule_slot_1, schedule_slot_2, schedule_slot_3, schedule_slot_4, schedule_slot_5, schedule_slot_6, linkquality")],-1),n=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/PSBZS-A1.png",alt:"Lidl PSBZS A1"})])],-1),r=(0,i.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="timer-numeric" tabindex="-1"><a class="header-anchor" href="#timer-numeric"><span>Timer (numeric)</span></a></h3><p>Auto off after specific time for manual watering.. Value can be found in the published state on the <code>timer</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;timer&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>599</code>. The unit of this value is <code>min</code>.</p><h3 id="time-left-numeric" tabindex="-1"><a class="header-anchor" href="#time-left-numeric"><span>Time left (numeric)</span></a></h3><p>Remaining time until the watering turns off.. Value can be found in the published state on the <code>time_left</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>min</code>.</p><h3 id="frost-lock-binary" tabindex="-1"><a class="header-anchor" href="#frost-lock-binary"><span>Frost lock (binary)</span></a></h3><p>Indicates if the frost guard is currently active. If the temperature drops below 5° C, device activates frost guard and disables irrigation. You need to reset the frost guard to activate irrigation again. Note: There is no way to enable frost guard manually.. Value can be found in the published state on the <code>frost_lock</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>ON</code> frost lock is ON, if <code>OFF</code> OFF.</p><h3 id="reset-frost-lock-enum" tabindex="-1"><a class="header-anchor" href="#reset-frost-lock-enum"><span>Reset frost lock (enum)</span></a></h3><p>Resets frost lock to make the device workable again.. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;reset_frost_lock&quot;: NEW_VALUE}</code>. The possible values are: <code>RESET</code>.</p><h3 id="schedule-mode-enum" tabindex="-1"><a class="header-anchor" href="#schedule-mode-enum"><span>Schedule mode (enum)</span></a></h3><p>Scheduling mode that is currently in use.. Value can be found in the published state on the <code>schedule_mode</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>OFF</code>, <code>WEEKDAY</code>, <code>PERIODIC</code>.</p><h3 id="schedule-periodic-numeric" tabindex="-1"><a class="header-anchor" href="#schedule-periodic-numeric"><span>Schedule periodic (numeric)</span></a></h3><p>Watering by periodic interval: Irrigate every n days. Value can be found in the published state on the <code>schedule_periodic</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_periodic&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>7</code>. The unit of this value is <code>day</code>.</p><h3 id="schedule-weekday-composite" tabindex="-1"><a class="header-anchor" href="#schedule-weekday-composite"><span>Schedule weekday (composite)</span></a></h3><p>Watering by weekday: Irrigate individually for each day.. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_weekday&quot;: {&quot;monday&quot;: VALUE, &quot;tuesday&quot;: VALUE, &quot;wednesday&quot;: VALUE, &quot;thursday&quot;: VALUE, &quot;friday&quot;: VALUE, &quot;saturday&quot;: VALUE, &quot;sunday&quot;: VALUE}}</code></p><ul><li><code>monday</code> (binary) allowed values: <code>ON</code> or <code>OFF</code></li><li><code>tuesday</code> (binary) allowed values: <code>ON</code> or <code>OFF</code></li><li><code>wednesday</code> (binary) allowed values: <code>ON</code> or <code>OFF</code></li><li><code>thursday</code> (binary) allowed values: <code>ON</code> or <code>OFF</code></li><li><code>friday</code> (binary) allowed values: <code>ON</code> or <code>OFF</code></li><li><code>saturday</code> (binary) allowed values: <code>ON</code> or <code>OFF</code></li><li><code>sunday</code> (binary) allowed values: <code>ON</code> or <code>OFF</code></li></ul><h3 id="schedule-slot-1-composite" tabindex="-1"><a class="header-anchor" href="#schedule-slot-1-composite"><span>Schedule slot 1 (composite)</span></a></h3><p>Watering time slot 1. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_slot_1&quot;: {&quot;state&quot;: VALUE, &quot;start_hour&quot;: VALUE, &quot;start_minute&quot;: VALUE, &quot;timer&quot;: VALUE, &quot;pause&quot;: VALUE, &quot;iterations&quot;: VALUE}}</code></p><ul><li><code>state</code> (binary): On/off state of the time slot allowed values: <code>ON</code> or <code>OFF</code></li><li><code>start_hour</code> (numeric): Starting time (hour) max value is 23, unit is h</li><li><code>start_minute</code> (numeric): Starting time (minute) max value is 59, unit is min</li><li><code>timer</code> (numeric): Auto off after specific time for scheduled watering. min value is 1, max value is 599, unit is min</li><li><code>pause</code> (numeric): Pause after each iteration. max value is 599, unit is min</li><li><code>iterations</code> (numeric): Number of watering iterations. Works only if there is a pause. min value is 1, max value is 9</li></ul><h3 id="schedule-slot-2-composite" tabindex="-1"><a class="header-anchor" href="#schedule-slot-2-composite"><span>Schedule slot 2 (composite)</span></a></h3><p>Watering time slot 2. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_slot_2&quot;: {&quot;state&quot;: VALUE, &quot;start_hour&quot;: VALUE, &quot;start_minute&quot;: VALUE, &quot;timer&quot;: VALUE, &quot;pause&quot;: VALUE, &quot;iterations&quot;: VALUE}}</code></p><ul><li><code>state</code> (binary): On/off state of the time slot allowed values: <code>ON</code> or <code>OFF</code></li><li><code>start_hour</code> (numeric): Starting time (hour) max value is 23, unit is h</li><li><code>start_minute</code> (numeric): Starting time (minute) max value is 59, unit is min</li><li><code>timer</code> (numeric): Auto off after specific time for scheduled watering. min value is 1, max value is 599, unit is min</li><li><code>pause</code> (numeric): Pause after each iteration. max value is 599, unit is min</li><li><code>iterations</code> (numeric): Number of watering iterations. Works only if there is a pause. min value is 1, max value is 9</li></ul><h3 id="schedule-slot-3-composite" tabindex="-1"><a class="header-anchor" href="#schedule-slot-3-composite"><span>Schedule slot 3 (composite)</span></a></h3><p>Watering time slot 3. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_slot_3&quot;: {&quot;state&quot;: VALUE, &quot;start_hour&quot;: VALUE, &quot;start_minute&quot;: VALUE, &quot;timer&quot;: VALUE, &quot;pause&quot;: VALUE, &quot;iterations&quot;: VALUE}}</code></p><ul><li><code>state</code> (binary): On/off state of the time slot allowed values: <code>ON</code> or <code>OFF</code></li><li><code>start_hour</code> (numeric): Starting time (hour) max value is 23, unit is h</li><li><code>start_minute</code> (numeric): Starting time (minute) max value is 59, unit is min</li><li><code>timer</code> (numeric): Auto off after specific time for scheduled watering. min value is 1, max value is 599, unit is min</li><li><code>pause</code> (numeric): Pause after each iteration. max value is 599, unit is min</li><li><code>iterations</code> (numeric): Number of watering iterations. Works only if there is a pause. min value is 1, max value is 9</li></ul><h3 id="schedule-slot-4-composite" tabindex="-1"><a class="header-anchor" href="#schedule-slot-4-composite"><span>Schedule slot 4 (composite)</span></a></h3><p>Watering time slot 4. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_slot_4&quot;: {&quot;state&quot;: VALUE, &quot;start_hour&quot;: VALUE, &quot;start_minute&quot;: VALUE, &quot;timer&quot;: VALUE, &quot;pause&quot;: VALUE, &quot;iterations&quot;: VALUE}}</code></p><ul><li><code>state</code> (binary): On/off state of the time slot allowed values: <code>ON</code> or <code>OFF</code></li><li><code>start_hour</code> (numeric): Starting time (hour) max value is 23, unit is h</li><li><code>start_minute</code> (numeric): Starting time (minute) max value is 59, unit is min</li><li><code>timer</code> (numeric): Auto off after specific time for scheduled watering. min value is 1, max value is 599, unit is min</li><li><code>pause</code> (numeric): Pause after each iteration. max value is 599, unit is min</li><li><code>iterations</code> (numeric): Number of watering iterations. Works only if there is a pause. min value is 1, max value is 9</li></ul><h3 id="schedule-slot-5-composite" tabindex="-1"><a class="header-anchor" href="#schedule-slot-5-composite"><span>Schedule slot 5 (composite)</span></a></h3><p>Watering time slot 5. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_slot_5&quot;: {&quot;state&quot;: VALUE, &quot;start_hour&quot;: VALUE, &quot;start_minute&quot;: VALUE, &quot;timer&quot;: VALUE, &quot;pause&quot;: VALUE, &quot;iterations&quot;: VALUE}}</code></p><ul><li><code>state</code> (binary): On/off state of the time slot allowed values: <code>ON</code> or <code>OFF</code></li><li><code>start_hour</code> (numeric): Starting time (hour) max value is 23, unit is h</li><li><code>start_minute</code> (numeric): Starting time (minute) max value is 59, unit is min</li><li><code>timer</code> (numeric): Auto off after specific time for scheduled watering. min value is 1, max value is 599, unit is min</li><li><code>pause</code> (numeric): Pause after each iteration. max value is 599, unit is min</li><li><code>iterations</code> (numeric): Number of watering iterations. Works only if there is a pause. min value is 1, max value is 9</li></ul><h3 id="schedule-slot-6-composite" tabindex="-1"><a class="header-anchor" href="#schedule-slot-6-composite"><span>Schedule slot 6 (composite)</span></a></h3><p>Watering time slot 6. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_slot_6&quot;: {&quot;state&quot;: VALUE, &quot;start_hour&quot;: VALUE, &quot;start_minute&quot;: VALUE, &quot;timer&quot;: VALUE, &quot;pause&quot;: VALUE, &quot;iterations&quot;: VALUE}}</code></p><ul><li><code>state</code> (binary): On/off state of the time slot allowed values: <code>ON</code> or <code>OFF</code></li><li><code>start_hour</code> (numeric): Starting time (hour) max value is 23, unit is h</li><li><code>start_minute</code> (numeric): Starting time (minute) max value is 59, unit is min</li><li><code>timer</code> (numeric): Auto off after specific time for scheduled watering. min value is 1, max value is 599, unit is min</li><li><code>pause</code> (numeric): Pause after each iteration. max value is 599, unit is min</li><li><code>iterations</code> (numeric): Number of watering iterations. Works only if there is a pause. min value is 1, max value is 9</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',40),h={},m=(0,o(40681).A)(h,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[s,(0,i.Lk)("table",null,[l,(0,i.Lk)("tbody",null,[a,(0,i.Lk)("tr",null,[c,(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Lidl"},{default:(0,i.k6)((()=>[(0,i.eW)("Lidl")])),_:1})])]),u,d,n])]),r])}]]),p=JSON.parse('{"path":"/devices/PSBZS_A1.html","title":"Lidl PSBZS A1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Lidl PSBZS A1 control via MQTT","description":"Integrate your Lidl PSBZS A1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-07-01T18:17:29.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Timer (numeric)","slug":"timer-numeric","link":"#timer-numeric","children":[]},{"level":3,"title":"Time left (numeric)","slug":"time-left-numeric","link":"#time-left-numeric","children":[]},{"level":3,"title":"Frost lock (binary)","slug":"frost-lock-binary","link":"#frost-lock-binary","children":[]},{"level":3,"title":"Reset frost lock (enum)","slug":"reset-frost-lock-enum","link":"#reset-frost-lock-enum","children":[]},{"level":3,"title":"Schedule mode (enum)","slug":"schedule-mode-enum","link":"#schedule-mode-enum","children":[]},{"level":3,"title":"Schedule periodic (numeric)","slug":"schedule-periodic-numeric","link":"#schedule-periodic-numeric","children":[]},{"level":3,"title":"Schedule weekday (composite)","slug":"schedule-weekday-composite","link":"#schedule-weekday-composite","children":[]},{"level":3,"title":"Schedule slot 1 (composite)","slug":"schedule-slot-1-composite","link":"#schedule-slot-1-composite","children":[]},{"level":3,"title":"Schedule slot 2 (composite)","slug":"schedule-slot-2-composite","link":"#schedule-slot-2-composite","children":[]},{"level":3,"title":"Schedule slot 3 (composite)","slug":"schedule-slot-3-composite","link":"#schedule-slot-3-composite","children":[]},{"level":3,"title":"Schedule slot 4 (composite)","slug":"schedule-slot-4-composite","link":"#schedule-slot-4-composite","children":[]},{"level":3,"title":"Schedule slot 5 (composite)","slug":"schedule-slot-5-composite","link":"#schedule-slot-5-composite","children":[]},{"level":3,"title":"Schedule slot 6 (composite)","slug":"schedule-slot-6-composite","link":"#schedule-slot-6-composite","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1722715476000},"filePathRelative":"devices/PSBZS_A1.md"}')}}]);