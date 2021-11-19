export class CVExperienceTraining {
  constructor(
    public label: string,
    public type: string,
    public startDate: Date,
    public endDate: Date,
    public displayedDate: string,
    public tags: Array<string>,
    public company: string,
    public city: string,
    public country: string,
    public description: string,
    public img: string,
  ) {} 
}

export class CVHobby {
  constructor(
    public label: string,
    public descripiton: string,
    public img: string,
    public tags: Array<string>,
  ) {}
}

export class CVSkills {
  constructor(
    public label: string,
    public img: string,
    public description: string,
    public tags: Array<string>,
  ) {}
}

export class CVContact {
  constructor(
    public email: string,
    public phone: string,
    public location: string,
    public linkedIn: string,
    public img: string,
    public name: string,
    public age: string,
  ) {}
}
