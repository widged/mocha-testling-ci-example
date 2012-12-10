# mocha-testling-ci-example

Run mocha tests in [all the browsers](http://browserling.com/browsers.json)
with [testling-ci](http://ci.testling.com).

[![browser support](http://ci.testling.com/substack/mocha-testling-ci-example.png)](http://ci.testling.com/substack/mocha-testling-ci-example)

# usage

First add a github web hook to your repo (under admin/hooks) for
"http://git.testling.com".

Then push code to github.

Next go to "http://ci.testling.com/USER/PROJECT" to see your test status.

Then you can add a badge in your readme.markdown with the test status:

```
[![browser support](http://ci.testling.com/USER/PROJECT.png)](http://ci.testling.com/USER/PROJECT)
```

# license

MIT
