class AddressBook {
    constructor() {
        this.contactArray = [];
        this.initialComplete = false;
    }
}

AddressBook.prototype.addContact = function(contact) {
    this.contactArray[this.contactArray.length] = contact;
}

AddressBook.prototype.getContact = function(index) {
    return this.contactArray[index];
}

AddressBook.prototype.deleteContact = function(index) {
    this.contactArray[index] = undefined;
}

//asynchronous testing

AddressBook.prototype.getInitialContacts = function(cb) {
    let self = this;

    setTimeout(function() {
        self.initialComplete = true;
        console.log(self.initialComplete);
        if(cb) {
            return cb();
        }
    }, 3);
}