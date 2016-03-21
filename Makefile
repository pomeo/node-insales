MOCHA_PATH=node_modules/.bin/_mocha
ISTANBUL_PATH=node_modules/.bin/istanbul
COVERALLS_PATH=node_modules/.bin/coveralls

test:
	NODE_ENV=test $(MOCHA_PATH) --compilers js:babel-core/register -w -G --reporter spec

test-debug:
	NODE_ENV=test $(MOCHA_PATH) --compilers js:babel-core/register -w -G --reporter spec debug

test-once:
	echo TRAVIS_JOB_ID $(TRAVIS_JOB_ID)
	NODE_ENV=test $(MOCHA_PATH) --compilers js:babel-core/register --reporter spec

test-coverage:
	NODE_ENV=test INSALES_COVERAGE=1 \
	$(ISTANBUL_PATH) cover \
	$(MOCHA_PATH) --compilers js:babel-core/register -- -R spec

test-coveralls:
	NODE_ENV=test INSALES_COVERAGE=1 $(ISTANBUL_PATH) cover \
	$(MOCHA_PATH) --compilers js:babel-core/register --report lcovonly -- -R spec && \
	cat ./coverage/lcov.info | $(COVERALLS_PATH) --verbose

.PHONY: test test-coverage test-coveralls
