import {AuthorityParameters} from '../../../dist/authority/validatable/authority';
import ValidatableAuthority from '../../../dist/authority/validatable/validatable';
import {AuthorityParameter} from '../../../dist/authority/validatable/string/authority';
import {TruncateParameters} from "@alirya/string/truncate";

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let subject = new Map<AuthorityParameters, ValidatableAuthority>();


subject.set(new AuthorityParameters('www.google.com', AuthorityParameter), <AuthorityParameters>{
    host : {
        value:'www.google.com',
        valid:true,
        toString() {return this.value;}
    },
    valid : true,
});

subject.set(new AuthorityParameters('255.255.255.255', AuthorityParameter), <AuthorityParameters>{
    host : {
        value:'255.255.255.255',
        valid:true,
        toString() {return this.value;}
    },
    valid : true,
});

subject.set(new AuthorityParameters('2001:db8:1234:ffff:ffff:ffff:ffff:ffff', AuthorityParameter), <AuthorityParameters>{
    host : {
        value:'2001:db8:1234:ffff:ffff:ffff:ffff:ffff',
        valid:true,
        toString() {return this.value;}
    },
    valid : true,
});

subject.set(new AuthorityParameters('[2001:db8:1234:ffff:ffff:ffff:ffff:ffff]', AuthorityParameter), <AuthorityParameters>{
    host : {
        value:'[2001:db8:1234:ffff:ffff:ffff:ffff:ffff]',
        valid:true,
        toString() {return this.value;}
    },
    valid : true,
});






subject.set(new AuthorityParameters('www.google.com:1337', AuthorityParameter), <AuthorityParameters>{
    host : {
        value:'www.google.com',
        valid:true,
        toString() {return this.value;}
    },
    port : {
        value:1337,
        valid:true,
        toString() {return this.value.toString();}
    },
    valid : true,
});


subject.set(new AuthorityParameters('www.google.com:abcd', AuthorityParameter), <AuthorityParameters>{
    host : {
        value:'www.google.com:abcd',
        valid:false,
        toString() {return this.value;}
    },
    valid : false,
});

subject.set(new AuthorityParameters('255.255.255.255:1337', AuthorityParameter), <AuthorityParameters>{
    host : {
        value:'255.255.255.255',
        valid:true,
        toString() {return this.value;}
    },
    port : {
        value:1337,
        valid:true,
        toString() {return this.value.toString();}
    },
    valid : true,
});

subject.set(new AuthorityParameters('2001:db8:1234:ffff:ffff:ffff:ffff:ffff:1337', AuthorityParameter), <AuthorityParameters>{
    host : {
        value:'2001:db8:1234:ffff:ffff:ffff:ffff:ffff',
        valid:true,
        toString() {return this.value;}
    },
    port : {
        value:1337,
        valid:true,
        toString() {return this.value.toString();}
    },
    valid : true,
});

subject.set(new AuthorityParameters('[2001:db8:1234:ffff:ffff:ffff:ffff:ffff]:1337', AuthorityParameter), <AuthorityParameters>{
    host : {
        value:'[2001:db8:1234:ffff:ffff:ffff:ffff:ffff]',
        valid:true,
        toString() {return this.value;}
    },
    port : {
        value:1337,
        valid:true,
        toString() {return this.value.toString();}
    },
    valid : true,
});


subject.set(new AuthorityParameters('[2001:db8:1234:ffff:ffff:ffff:ffff:ffff:1337', AuthorityParameter), <AuthorityParameters>{
    host : {
        value:'[2001:db8:1234:ffff:ffff:ffff:ffff:ffff',
        valid:false,
        toString() {return this.value;}
    },
    port : {
        value:1337,
        valid:true,
        toString() {return this.value.toString();}
    },
    valid : false,
});





subject.set(new AuthorityParameters('user:password@www.google.com:1337', AuthorityParameter), <AuthorityParameters>{
    host : {
        value:'www.google.com',
        valid:true,
        toString() {return this.value;}
    },
    port : {
        value:1337,
        valid:true,
        toString() {return this.value.toString();}
    },
    userInfo : {
        user : {
            value:'user',
            valid:true,
            toString() {return this.value;}
        },
        password : {
            value:'password',
            valid:true,
            toString() {return this.value;}
        },
        valid : true,
    },
    valid : true,
});

subject.set(new AuthorityParameters('user:password@255.255.255.255:1337', AuthorityParameter), <AuthorityParameters>{
    host : {
        value:'255.255.255.255',
        valid:true,
        toString() {return this.value;}
    },
    port : {
        value:1337,
        valid:true,
        toString() {return this.value.toString();}
    },
    userInfo : {
        user : {
            value:'user',
            valid:true,
            toString() {return this.value;}
        },
        password : {
            value:'password',
            valid:true,
            toString() {return this.value;}
        },
        valid : true,
    },
    valid : true,
});

subject.set(new AuthorityParameters('user:password@2001:db8:1234:ffff:ffff:ffff:ffff:ffff:1337', AuthorityParameter), <AuthorityParameters>{
    host : {
        value:'2001:db8:1234:ffff:ffff:ffff:ffff:ffff',
        valid:true,
        toString() {return this.value;}
    },
    port : {
        value:1337,
        valid:true,
        toString() {return this.value.toString();}
    },
    userInfo : {
        user : {
            value:'user',
            valid:true,
            toString() {return this.value;}
        },
        password : {
            value:'password',
            valid:true,
            toString() {return this.value;}
        },
        valid : true,
    },
    valid : true,
});

subject.set(new AuthorityParameters('user:password@[2001:db8:1234:ffff:ffff:ffff:ffff:ffff]:1337', AuthorityParameter), <AuthorityParameters>{
    host : {
        value:'[2001:db8:1234:ffff:ffff:ffff:ffff:ffff]',
        valid:true,
        toString() {return this.value;}
    },
    userInfo : {
        user : {
            value:'user',
            valid:true,
            toString() {return this.value;}
        },
        password : {
            value:'password',
            valid:true,
            toString() {return this.value;}
        },
        valid : true,
    },
    port : {
        value:1337,
        valid:true,
        toString() {return this.value.toString();}
    },
    valid : true,
});



subject.set(new AuthorityParameters('/', AuthorityParameter), <AuthorityParameters>{
    host : {
        value:'/',
        valid:false,
        toString() {return this.value;}
    },
    valid : false,
});


subject.set(new AuthorityParameters('1abc', AuthorityParameter), <AuthorityParameters>{
    host : {
        value:'1abc',
        valid:true,
        toString() {return this.value;}
    },
    valid : true,
});




for(let [value, expectation] of subject) {

    describe(value.value, ()=>{

        it('host', ()=>{

            if(expectation.host) {

                if(value.host) {

                    expect(value.host.valid).toBe(expectation.host.valid);
                    expect(value.host.value).toBe(expectation.host.value);


                    if(value.host.valid) {

                        expect(value.host.toString()).toBe(expectation.host.toString());

                    } else {

                        try {
                            expect(value.host.toString()).toBe(expectation.host.toString());
                            fail('error should be thrown');

                        } catch (error) {

                            expect(error).toBeInstanceOf(Error);
                            expect(error.toString()).toBe(`Error: "value is not valid host, actual \\"${TruncateParameters(expectation.host.value, 10)}\\"."`);
                        }
                    }


                } else {

                    fail('host should exists');
                }

            } else if(value.host) {

                fail('host should not exists');
            }
        });


        it('port', ()=>{

            if(expectation.port) {

                if(value.port) {

                    expect(value.port.valid).toBe(expectation.port.valid);
                    expect(value.port.value).toBe(expectation.port.value);
                    expect(value.port.toString()).toBe(expectation.port.toString());

                } else {

                    fail('port should exists');
                }

            } else if(value.port) {

                fail('port should not exists');
            }
        });

        describe('user info',()=>{


            it('user info availability', ()=>{

                expect(!!expectation.userInfo).toBe(!!value.userInfo);

                if(expectation.userInfo && value.userInfo) {
                    expect(!!expectation.userInfo.user).toBe(!!value.userInfo.user);
                    expect(!!expectation.userInfo.password).toBe(!!value.userInfo.password);
                }
            });

            it('user', ()=>{

                if(expectation.userInfo && expectation.userInfo.user) {

                    if(value.userInfo && value.userInfo.user) {

                        expect(value.userInfo.user.valid).toBe(expectation.userInfo.user.valid);
                        expect(value.userInfo.user.value).toBe(expectation.userInfo.user.value);
                        expect(value.userInfo.user.toString()).toBe(expectation.userInfo.user.toString());

                    } else {

                        fail('user should exists');
                    }

                } else if(value.userInfo && value.userInfo.user) {

                    fail('user should not exists');
                }
            });

            it('password', ()=>{

                if(expectation.userInfo && expectation.userInfo.password) {

                    if(value.userInfo && value.userInfo.password) {

                        expect(value.userInfo.password.valid).toBe(expectation.userInfo.password.valid);
                        expect(value.userInfo.password.value).toBe(expectation.userInfo.password.value);
                        expect(value.userInfo.password.toString()).toBe(expectation.userInfo.password.toString());

                    } else {

                        fail('user should exists');
                    }

                } else if(value.userInfo && value.userInfo.password) {

                    fail('user should not exists');
                }
            });

        });
    });
}
