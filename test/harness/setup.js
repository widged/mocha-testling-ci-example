mocha.setup({ ui : 'bdd', reporter : 'tap' });

setTimeout(function () {
    mocha.run();
}, 100);
