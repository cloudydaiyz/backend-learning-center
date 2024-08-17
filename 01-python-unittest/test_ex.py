import unittest

class TestOperations(unittest.TestCase):
    def test_arithmetic(self):
        self.assertEqual(1 + 2, 3)
    
    @unittest.expectedFailure
    def test_bad_arithmetic(self):
        self.assertEqual(1 + 2, 4)

    def test_something(self):
        self.assertEqual(2 + 2, 4)

class TestStringMethods(unittest.TestCase):

    def test_upper(self):
        self.assertEqual('foo'.upper(), 'FOO')

    def test_isupper(self):
        self.assertTrue('FOO'.isupper())
        self.assertFalse('Foo'.isupper())
        self.skipTest("for the skip test within method example")

    @unittest.skip("for the skipping example")
    def test_split(self):
        s = 'hello world'
        print("hi")
        self.assertEqual(s.split(), ['hello', 'world'])
        # check that s.split fails when the separator is not a string
        with self.assertRaises(TypeError):
            s.split(2)

if __name__ == "__main__":
    unittest.main()