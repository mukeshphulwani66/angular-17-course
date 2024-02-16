import { Injectable, Signal, computed, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private count = signal(0)

  doubleCount: Signal<number> = computed(() => this.count() * 2);

  constructor(){
    effect(()=>{
         console.log("count :",this.count(),"double count:",this.doubleCount())
    })
  }

  getCounter(){
    return this.count()
  }

  incrementCounter(){
    // this.count.set(6)
    
    this.count.update((oldValue)=>{
      return oldValue + 1
    })
    // this.count = this.count + 1
  }
}
