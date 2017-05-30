import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Snippet } from './snippet';

@Injectable()
export class SnippetService {
	private snippetsUrl = 'api/snippets';

	constructor(private http: Http) { }

	getSnippets(): Observable<Snippet[]> {
		return this.http.get(this.snippetsUrl)
						.map(this.extractData)
						.catch(this.handleError);
	}

	create(nickname: string, language: string, tags: string[], description: string, code: string) {
		let headers = new Headers({'Content-Type': 'application/json'});
		let options = new RequestOptions({headers: headers});
		return this.http.post(this.snippetsUrl, {nickname, language, tags, description, code}, options)
							.map(this.extractData)
							.catch(this.handleError);
	}

	remove(nickname: string) {
		let headers = new Headers({'Content-Type': 'application/json'});
		let options = new RequestOptions({headers: headers});
		return this.http.delete(`${this.snippetsUrl}/${nickname}`, options)
							.map(this.extractData)
							.catch(this.handleError);
	}

	getSnippet(nickname: string) {
		return this.getSnippets().map(snippets => snippets.find(snippet => snippet.nickname == nickname));
	}

	private extractData(res: Response) {
		let body = res.json();
		return body.data || { };
	}

	private handleError(error: Response | any) {
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || "";
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}

}
