//create an expressjs application
const express = require('express');
const app = express();
//import middleware mudules
const bodyParser = require('body-parser');
// Mongoose
const mongoose = require('mongoose');
app.use(express.static(__dirname+'/client'));
// parse application/json
app.use(bodyParser.json());
Foundry =require('./models/main');
Block =require('./models/main');
Definition =require('./models/main');
Component =require('./models/main');
// Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/photonicsdb', { useNewUrlParser: true });
var db = mongoose.connection;
// Routing
app.get('/', (req, res) => {
	res.send('photonicsdb: please use /api/...');
});
// A collection of foundry documents
app.get('/api/foundries', (req, res) => {
	Foundry.getFoundries((err, foundries) => {
		if(err){
			throw err;
		}
		res.json(foundries);
	});
});
// A foundry document
app.get('/api/foundries/:_id', (req, res) => {
	Foundry.getFoundryById(req.params._id, (err, foundry) => {
		if(err){
			throw err;
		}
		res.json(foundry);
	});
});
// A foundry document
app.post('/api/foundries', (req, res) => {
	var foundry = req.body;
	Foundry.addFoundry(foundry, (err, foundry) => {
		if(err){
			throw err;
		}
		res.json(foundry);
	});
});
// A foundry document
app.put('/api/foundries/:_id', (req, res) => {
	var id = req.params._id;
	var foundry = req.body;
	Foundry.updateFoundry(id, foundry, {}, (err, foundry) => {
		if(err){
			throw err;
		}
		res.json(foundry);
	});
});
// A foundry document
app.delete('/api/foundries/:_id', (req, res) => {
	var id = req.params._id;
	Foundry.removeFoundry(id, (err, foundry) => {
		if(err){
			throw err;
		}
		res.json(foundry);
	});
});

// Blocks

app.get('/api/blocks/', (req, res) => {
	Block.getBlocks((err, blocks) => {
		if(err){
			throw err;
		}
		res.json(blocks);
	});
});

app.get('/api/blocks/:_id', (req, res) => {
	Block.getBlockById(req.params._id, (err, block) => {
		if(err){
			throw err;
		}
		res.json(block);
	});
});

app.post('/api/blocks', (req, res) => {
	var block = req.body;
	Block.addBlock(block, (err, block) => {
		if(err){
			throw err;
		}
		res.json(block);
	});
});

app.put('/api/blocks/:_id', (req, res) => {
	var id = req.params._id;
	var block = req.body;
	Block.updateBlock(id, block, {}, (err, block) => {
		if(err){
			throw err;
		}
		res.json(block);
	});
});

app.delete('/api/blocks/:_id', (req, res) => {
	var id = req.params._id;
	Block.removeBlock(id, (err, block) => {
		if(err){
			throw err;
		}
		res.json(block);
	});
});

// Definitions

app.get('/api/definitions/', (req, res) => {
	Definition.getDefinitions((err, definitions) => {
		if(err){
			throw err;
		}
		res.json(definitions);
	});
});

app.get('/api/definitions/:_id', (req, res) => {
	Definition.getDefinitionById(req.params._id, (err, definition) => {
		if(err){
			throw err;
		}
		res.json(definition);
	});
});

app.post('/api/definitions', (req, res) => {
	var definition = req.body;
	Definition.addDefinition(definition, (err, definition) => {
		if(err){
			throw err;
		}
		res.json(definition);
	});
});

app.put('/api/definitions/:_id', (req, res) => {
	var id = req.params._id;
	var definition = req.body;
	Definition.updateDefinition(id, definition, {}, (err, definition) => {
		if(err){
			throw err;
		}
		res.json(definition);
	});
});

app.delete('/api/definitions/:_id', (req, res) => {
	var id = req.params._id;
	Definition.removeDefinition(id, (err, definition) => {
		if(err){
			throw err;
		}
		res.json(definition);
	});
});

// Components

app.get('/api/components/', (req, res) => {
	Component.getComponents((err, components) => {
		if(err){
			throw err;
		}
		res.json(components);
	});
});

app.get('/api/components/:_id', (req, res) => {
	Component.getComponentById(req.params._id, (err, component) => {
		if(err){
			throw err;
		}
		res.json(component);
	});
});

app.post('/api/components', (req, res) => {
	var component = req.body;
	Component.addComponent(component, (err, component) => {
		if(err){
			throw err;
		}
		res.json(component);
	});
});

app.put('/api/components/:_id', (req, res) => {
	var id = req.params._id;
	var component = req.body;
	Component.updateComponent(id, component, {}, (err, component) => {
		if(err){
			throw err;
		}
		res.json(component);
	});
});

app.delete('/api/components/:_id', (req, res) => {
	var id = req.params._id;
	Component.removeComponent(id, (err, component) => {
		if(err){
			throw err;
		}
		res.json(component);
	});
});
//setting 33000 as the port
app.listen(33000);
console.log('Running on port 33000...');
