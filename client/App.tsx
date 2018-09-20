import * as React from 'react';
import Authors from './components/authors/authors';

const App = () => (
	<div className="container">
		<div>
			<h1>hello world :)</h1>
			<p>{'If you see authors and books below everything is working <3'}</p>
			<Authors />
		</div>
	</div>
);

export default App;
