export class Resume {

    basics: any;
    profiles: Array<Profile> = new Array<Profile>();
    works: Array<Work> = new Array<Work>();
    skills: Array<Skill> = new Array<Skill>();
    education: Array<Education> = new Array<Education>();
    references: Array<Reference> = new Array<Reference>();

    constructor() {
        this.basics = {
            name: '',
            label: '',
            picture: '',
            email: '',
            phone: '',
            website: '',
            summary: '',
            location: {
                address: '',
                city: '',
            },
            profiles: this.profiles
        };
    }
}

export class Profile {
    network: string;
    username: string;
    url: string;
    constructor() {
      this.network = '';
      this.username = '';
      this.url = '';
    }
  }

  export class Work {
    company: string;
    position: string;
    website: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: Array<string> = new Array<string>();
    constructor() {
      this.company = '';
      this.position = '';
      this.website = '';
      this.startDate = '';
      this.endDate = '';
      this.summary = '';
      this.highlights = [];
    }
  }

  export class Skill {
    name: string;
    level: string;
    keywords: Array<string> = new Array<string>();
    constructor() {
      this.name = '';
      this.level = '';
      this.keywords = [];
    }
  }

  export class Education {
    institution: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    constructor() {
      this.institution = '';
      this.area = '';
      this.studyType = '';
      this.startDate = '';
      this.endDate = '';

    }
  }

  export class Reference {
    name: string;
    reference: string;
    constructor() {
      this.name = '';
      this.reference = '';
    }
  }
