import { Injectable } from '@angular/core';

@Injectable()
export class LightService {

  characters = ['Yoda', 'Obi Wan Kenobi', 'Luke Skywalker'];

	public getJediList(){
		return this.characters;
	}

}
