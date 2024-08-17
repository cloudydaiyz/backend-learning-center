import unittest
import pytest

def test_arithmetic():
    assert 1 + 2 == 3
    
def test_bad_arithmetic():
    with pytest.raises(Exception):
        assert 1 + 2 == 4

def test_something():
    assert 2 + 2 == 4

def test_upper():
    assert 'foo'.upper() == 'FOO'

def test_isupper():
    assert 'FOO'.isupper()
    assert not 'Foo'.isupper()

@pytest.mark.skip(reason="for the skipping example")
def test_split():
    s = 'hello world'
    print("hi")
    assert s.split() == ['hello', 'world']

    # check that s.split fails when the separator is not a string
    with pytest.raises(TypeError):
        s.split(2)

@pytest.fixture
def listing():
    print('hello world')
    return []

def test_li_a(listing):
    listing.append(1)
    print(listing)

def test_li_b(listing):
    listing.append(2)
    print(listing)

if __name__ == "__main__":
    pytest.main()