#!/bin/bash

# == Parameter expansion syntax ==
# If TEST_FILE is not set, then this outputs an empty string.
# Otherwise, it "expands to the value of x" (outputs x instead), regardless of the value of TEST_FILE.
echo "${TEST_FILE+x}"

echo $* # not recommended to use this; use $@ instead
echo $@
echo $#
echo $-
echo $$
echo $0
echo $_