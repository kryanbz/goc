import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 117101.1, courseid: "CMPS 1171", name: 'INTRODUCTION TO DATABASES', credits: 3, section: "O1.1", modality: "Online", modalitytype: "Asynchronous", instructor: "Dr. Kieran Ryan", program: "BINT", semester: "2020-1", days: "Asynchronous", time: "Asynchronous", venue: "Online", tool: "Google Meet", platform: "Moodle", prereq1: "CMPS 1134 - Fundamentals of Computing", coreq: "NA", trips: "No", officelocation: "Jaguar/JAG-D5, Belmopan", officehours: "Monday - Sunday – 1:00pm - 3:00pm or by appointment", telephone: "Office: 822-1000 Ext. 512", email: "kryan@ub.edu.bz"  },
      { id: 212201, courseid: "CMPS 2122", name: 'PROGRAMMING II', credits: 3, section: "O1", modality: "Online", modalitytype: "Asynchronous", instructor: "Dr. Kieran Ryan", program: "BINT", semester: "2020-1", days: "Tuesday,Thursday", time: "9:30-10:45 AM", venue: "Online", tool: "Google Meet", platform: "Moodle", prereq1: "CMPS 2121 - Programmin I", coreq: "NA", trips: "No", officelocation: "Jaguar/JAG-D5, Belmopan", officehours: "Monday - Sunday – 1:00pm - 3:00pm or by appointment", telephone: "Office: 822-1000 Ext. 512", email: "kryan@ub.edu.bz" },
      { id: 301201, courseid: "CMPS 3012", name: 'MANAGEMENT INFORMATION SYSTEM', credits: 3, section: "O1", modality: "Online", modalitytype: "Asynchronous", instructor: "Dr. Kieran Ryan", program: "BINT", semester: "2020-1", days: "Asynchronous", time: "Asynchronous", venue: "Online", tool: "Google Meet", platform: "Moodle", prereq1: "CMPS 1014 - Introduction to Computer Studies", coreq: "NA", trips: "No", officelocation: "Jaguar/JAG-D5, Belmopan", officehours: "Monday - Sunday – 1:00pm - 3:00pm or by appointment", telephone: "Office: 822-1000 Ext. 512", email: "kryan@ub.edu.bz"  },
      { id: 301201.1, courseid: "CMPS 3012",name: 'MANAGEMENT INFORMATION SYSTEM', credits: 3, section: "O1.1", modality: "Online", modalitytype: "Asynchronous", instructor: "Dr. Kieran Ryan", program: "BINT", semester: "2020-1", days: "Asynchronous", time: "Asynchronous", venue: "Online", tool: "Google Meet", platform: "Moodle", prereq1: "CMPS 1014 - Introduction to Computer Studies", coreq: "NA", trips: "No", officelocation: "Jaguar/JAG-D5, Belmopan", officehours: "Monday - Sunday – 1:00pm - 3:00pm or by appointment", telephone: "Office: 822-1000 Ext. 512", email: "kryan@ub.edu.bz"  },
      { id: 301201.2, courseid: "CMPS 3012",name: 'MANAGEMENT INFORMATION SYSTEM', credits: 3, section: "O1.2", modality: "Online", modalitytype: "Asynchronous", instructor: "Dr. Kieran Ryan", program: "BINT", semester: "2020-1", days: "Asynchronous", time: "Asynchronous", venue: "Online", tool: "Google Meet", platform: "Moodle", prereq1: "CMPS 1014 - Introduction to Computer Studies", coreq: "NA", trips: "No", officelocation: "Jaguar/JAG-D5, Belmopan", officehours: "Monday - Sunday – 1:00pm - 3:00pm or by appointment", telephone: "Office: 822-1000 Ext. 512", email: "kryan@ub.edu.bz"  },
      { id: 301201.4, courseid: "CMPS 3012",name: 'MANAGEMENT INFORMATION SYSTEM', credits: 3, section: "O1.4", modality: "Online", modalitytype: "Asynchronous", instructor: "Dr. Kieran Ryan", program: "BINT", semester: "2020-1", days: "Asynchronous", time: "Asynchronous", venue: "Online", tool: "Google Meet", platform: "Moodle", prereq1: "CMPS 1014 - Introduction to Computer Studies", coreq: "NA", trips: "No", officelocation: "Jaguar/JAG-D5, Belmopan", officehours: "Monday - Sunday – 1:00pm - 3:00pm or by appointment", telephone: "Office: 822-1000 Ext. 512", email: "kryan@ub.edu.bz"  },
      { id: 301202, courseid: "CMPS 3012",name: 'MANAGEMENT INFORMATION SYSTEM', credits: 3, section: "O2", modality: "Online", modalitytype: "Asynchronous", instructor: "Dr. Kieran Ryan", program: "BINT", semester: "2020-1", days: "Asynchronous", time: "Asynchronous", venue: "Online", tool: "Google Meet", platform: "Moodle", prereq1: "CMPS 1014 - Introduction to Computer Studies", coreq: "NA", trips: "No", officelocation: "Jaguar/JAG-D5, Belmopan", officehours: "Monday - Sunday – 1:00pm - 3:00pm or by appointment", telephone: "Office: 822-1000 Ext. 512", email: "kryan@ub.edu.bz"  }
     
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
