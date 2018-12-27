// Credits to david-polak https://github.com/kripken/emscripten/issues/5820#issuecomment-385722568
Module['ready'] = new Promise(function(resolve, reject) {
  delete Module['then'];
  Module['onAbort'] = function(what) {
    reject(what);
  };
  addOnPostRun(function() {
    Module['cryptonight'] = Module.cwrap('cryptonight', '', [
      /*'number', 'number', 'number', 'number', 'number'*/
    ]);
    Module['Malloc'] = Module._malloc;

    resolve(Module);
  });
});
