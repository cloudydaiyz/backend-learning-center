import assert from 'assert';

class UserError extends Error { 
    constructor(args) {
        super(args);
        this.name = "UserError";
    }
}

try {
    assert( 5 > 10, new UserError("This is a user error") );
    console.log(5 + true);
} catch(e) {
    if (e instanceof UserError) {
        console.log(e.stack);
        // console.log("User error:", e.message);
        // console.log(e.message);
    } else {
        // handle other errors
        console.log("Other error: ", e.message);
    }
}