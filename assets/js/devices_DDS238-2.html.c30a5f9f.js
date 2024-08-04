"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[42773],{64634:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>m,data:()=>f});var o=i(64516);const n=(0,o.Lk)("h1",{id:"hiking-dds238-2",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#hiking-dds238-2"},[(0,o.Lk)("span",null,"Hiking DDS238-2")])],-1),r=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1),c=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"DDS238-2")],-1),a=(0,o.Lk)("td",null,"Vendor",-1),l=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Single phase DIN-rail energy meter with switch function")],-1),d=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"switch (state), ac_frequency, energy, power, power_factor, voltage, current, produced_energy, power_reactive, energy_reactive, total_energy, linkquality")],-1),u=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/DDS238-2.png",alt:"Hiking DDS238-2"})])],-1),s=(0,o.Lk)("h2",{id:"options",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#options"},[(0,o.Lk)("span",null,"Options")])],-1),h=(0,o.Fv)('<ul><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_precision</code>: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="ac-frequency-numeric" tabindex="-1"><a class="header-anchor" href="#ac-frequency-numeric"><span>AC frequency (numeric)</span></a></h3><p>Measured electrical AC frequency. Value can be found in the published state on the <code>ac_frequency</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>Hz</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-factor-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-numeric"><span>Power factor (numeric)</span></a></h3><p>Instantaneous measured power factor. Value can be found in the published state on the <code>power_factor</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric"><span>Current (numeric)</span></a></h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="produced-energy-numeric" tabindex="-1"><a class="header-anchor" href="#produced-energy-numeric"><span>Produced energy (numeric)</span></a></h3><p>Sum of produced energy. Value can be found in the published state on the <code>produced_energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="power-reactive-numeric" tabindex="-1"><a class="header-anchor" href="#power-reactive-numeric"><span>Power reactive (numeric)</span></a></h3><p>Instantaneous measured reactive power. Value can be found in the published state on the <code>power_reactive</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>VAR</code>.</p><h3 id="energy-reactive-numeric" tabindex="-1"><a class="header-anchor" href="#energy-reactive-numeric"><span>Energy reactive (numeric)</span></a></h3><p>Sum of reactive energy. Value can be found in the published state on the <code>energy_reactive</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kVArh</code>.</p><h3 id="total-energy-numeric" tabindex="-1"><a class="header-anchor" href="#total-energy-numeric"><span>Total energy (numeric)</span></a></h3><p>Total consumed and produced energy. Value can be found in the published state on the <code>total_energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',26),p={},m=(0,i(40681).A)(p,[["render",function(e,t){const i=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[n,(0,o.Lk)("table",null,[r,(0,o.Lk)("tbody",null,[c,(0,o.Lk)("tr",null,[a,(0,o.Lk)("td",null,[(0,o.bF)(i,{to:"/supported-devices/#v=Hiking"},{default:(0,o.k6)((()=>[(0,o.eW)("Hiking")])),_:1})])]),l,d,u])]),s,(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>[(0,o.eW)("How to use device type specific configuration")])),_:1})])]),h])}]]),f=JSON.parse('{"path":"/devices/DDS238-2.html","title":"Hiking DDS238-2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Hiking DDS238-2 control via MQTT","description":"Integrate your Hiking DDS238-2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-10-03T08:44:52.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"AC frequency (numeric)","slug":"ac-frequency-numeric","link":"#ac-frequency-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Power factor (numeric)","slug":"power-factor-numeric","link":"#power-factor-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Current (numeric)","slug":"current-numeric","link":"#current-numeric","children":[]},{"level":3,"title":"Produced energy (numeric)","slug":"produced-energy-numeric","link":"#produced-energy-numeric","children":[]},{"level":3,"title":"Power reactive (numeric)","slug":"power-reactive-numeric","link":"#power-reactive-numeric","children":[]},{"level":3,"title":"Energy reactive (numeric)","slug":"energy-reactive-numeric","link":"#energy-reactive-numeric","children":[]},{"level":3,"title":"Total energy (numeric)","slug":"total-energy-numeric","link":"#total-energy-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1722715476000},"filePathRelative":"devices/DDS238-2.md"}')}}]);