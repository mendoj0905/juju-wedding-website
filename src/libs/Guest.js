class Guest {

  constructor(guestProps) {
    const { name, isAttending, email, familyMembers, children, plusOne, childrenAttending } = guestProps;
    this.name = name;
    this.isAttending = isAttending;
    this.email = email;
    this.familyMembers = familyMembers;
    this.children = children;
    this.plusOne = plusOne;
    this.childrenAttending = childrenAttending;
  }

}

export default Guest;