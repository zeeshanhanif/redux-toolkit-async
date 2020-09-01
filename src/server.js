// src/server.js
import { Server, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
  
  let server = new Server({
      environment,
      routes(){
          this.namespace = "api";

          this.get("updatecounter", ()=>{
              return 34;
          },{
              timing: 2000
          })
      }
  });
};
 