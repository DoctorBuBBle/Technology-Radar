/// <reference types="cypress" />
import React from "react";
import { mount } from "@cypress/react";
import TechnologyRadar from "./TechnologyRadar";

const entries = [
  { label: "0", title: "Git", ring: "I am confident", segment: "Tools" },
  {
    label: "1",
    title: "Jenkins",
    ring: "I know the fundametals",
    segment: "Tools",
  },
  {
    label: "2",
    title: "Netlify",
    ring: "I am on my way to beeing confident",
    segment: "Tools",
  },
  {
    label: "3",
    title: "Docker",
    ring: "I know the fundametals",
    segment: "Tools",
  },
  {
    label: "4",
    title: "Tomcat",
    ring: "I know the fundametals",
    segment: "Tools",
  },
  { label: "5", title: "NodeJS", ring: "I am confident", segment: "Tools" },
  {
    label: "6",
    title: "JavaScript",
    ring: "I am confident",
    segment: "Languages",
  },
  {
    label: "7",
    title: "NodeJS",
    ring: "I am confident",
    segment: "Frameworks",
  },
  {
    label: "8",
    title: "ExpressJS",
    ring: "I am on my way to beeing confident",
    segment: "Frameworks",
  },
  {
    label: "9",
    title: "React",
    ring: "I am confident",
    segment: "Frameworks",
  },
  {
    label: "10",
    title: "Gatsby",
    ring: "I am on my way to beeing confident",
    segment: "Frameworks",
  },
  {
    label: "11",
    title: "Netlify CMS",
    ring: "I am confident",
    segment: "Frameworks",
  },
  {
    label: "12",
    title: "jQuery",
    ring: "I am confident",
    segment: "Frameworks",
  },
  {
    label: "13",
    title: "Mustache",
    ring: "I am confident",
    segment: "Frameworks",
  },
  {
    label: "14",
    title: "AngularJS",
    ring: "I know the fundametals",
    segment: "Frameworks",
  },
  {
    label: "15",
    title: "GSAP (GreenSockAnimationPlatfrom)",
    ring: "I am on my way to beeing confident",
    segment: "Frameworks",
  },
  {
    label: "16",
    title: "Webpack",
    ring: "I am on my way to beeing confident",
    segment: "Frameworks",
  },
  {
    label: "17",
    title: "PHP",
    ring: "I know the fundametals",
    segment: "Languages",
  },
  {
    label: "18",
    title: "Delphi",
    ring: "I know the fundametals",
    segment: "Languages",
  },
  {
    label: "19",
    title: "Go",
    ring: "I want to learn",
    segment: "Languages",
  },
  {
    label: "20",
    title: "Python",
    ring: "I want to learn",
    segment: "Languages",
  },
  {
    label: "21",
    title: "HTML/CSS",
    ring: "I am confident",
    segment: "Languages",
  },
  {
    label: "22",
    title: "XML",
    ring: "I am confident",
    segment: "Languages",
  },
  {
    label: "23",
    title: "SVG",
    ring: "I am confident",
    segment: "Languages",
  },
  {
    label: "24",
    title: "SASS/SCSS",
    ring: "I am confident",
    segment: "Languages",
  },
  {
    label: "25",
    title: "Java",
    ring: "I am confident",
    segment: "Languages",
  },
  {
    label: "26",
    title: "Spring Boot",
    ring: "I know the fundametals",
    segment: "Frameworks",
  },
  {
    label: "27",
    title: "Spring MVC",
    ring: "I know the fundametals",
    segment: "Frameworks",
  },
  {
    label: "28",
    title: "Thymeleaf",
    ring: "I know the fundametals",
    segment: "Frameworks",
  },
  {
    label: "29",
    title: "Jersey",
    ring: "I am confident",
    segment: "Frameworks",
  },
  {
    label: "30",
    title: "Redux",
    ring: "I want to learn",
    segment: "Frameworks",
  },
  {
    label: "31",
    title: "ReasonML",
    ring: "I want to learn",
    segment: "Languages",
  },
  {
    label: "32",
    title: "Elixir",
    ring: "I want to learn",
    segment: "Languages",
  },
  {
    label: "33",
    title: "Phoenix (Elixir framework)",
    ring: "I want to learn",
    segment: "Frameworks",
  },
  {
    label: "34",
    title: "Clojure",
    ring: "I want to learn",
    segment: "Languages",
  },
  {
    label: "35",
    title: "Elm",
    ring: "I want to learn",
    segment: "Languages",
  },
  {
    label: "36",
    title: "F#",
    ring: "I want to learn",
    segment: "Languages",
  },
  {
    label: "37",
    title: "Ember.js",
    ring: "I want to learn",
    segment: "Frameworks",
  },
  {
    label: "38",
    title: "VueJS",
    ring: "I want to learn",
    segment: "Frameworks",
  },
  {
    label: "39",
    title: "Selenium ",
    ring: "I want to learn",
    segment: "Frameworks",
  },
  {
    label: "40",
    title: "Jest",
    ring: "I want to learn",
    segment: "Frameworks",
  },
  {
    label: "41",
    title: "Django",
    ring: "I want to learn",
    segment: "Frameworks",
  },
  {
    label: "42",
    title: "Flask",
    ring: "I want to learn",
    segment: "Frameworks",
  },
  {
    label: "43",
    title: "React Native",
    ring: "I want to learn",
    segment: "Frameworks",
  },
  {
    label: "44",
    title: "Kotline",
    ring: "I want to learn",
    segment: "Languages",
  },
  {
    label: "45",
    title: "C#",
    ring: "I want to learn",
    segment: "Languages",
  },
  {
    label: "46",
    title: "Next.js (React framework)",
    ring: "I want to learn",
    segment: "Frameworks",
  },
  {
    label: "47",
    title: "Nuxt.js (Vue framework)",
    ring: "I want to learn",
    segment: "Frameworks",
  },
  {
    label: "48",
    title: "Emmet Abbreviations",
    ring: "I want to learn",
    segment: "Languages",
  },
  {
    label: "49",
    title: "Cypress",
    ring: "I want to learn",
    segment: "Frameworks",
  },
  {
    label: "50",
    title: "MySQL",
    ring: "I am confident",
    segment: "Data Management",
  },
  {
    label: "51",
    title: "MongoDB",
    ring: "I want to learn",
    segment: "Data Management",
  },
  {
    label: "52",
    title: "Apache Solr",
    ring: "I am confident",
    segment: "Data Management",
  },
  {
    label: "53",
    title: "PostgreSQL",
    ring: "I am confident",
    segment: "Data Management",
  },
  {
    label: "54",
    title: "Flux (Application architecture for building user interfaces)",
    ring: "I want to learn",
    segment: "Other Topics",
  },
  {
    label: "55",
    title: "REST",
    ring: "I am confident",
    segment: "Other Topics",
  },
  {
    label: "56",
    title: "MVC",
    ring: "I am confident",
    segment: "Other Topics",
  },
  {
    label: "57",
    title: "Adobe Illustrator",
    ring: "I am on my way to beeing confident",
    segment: "Other Topics",
  },
  {
    label: "58",
    title: "Adobe Photoshop",
    ring: "I want to learn",
    segment: "Other Topics",
  },
  {
    label: "59",
    title: "Webdesign fundametals",
    ring: "I want to learn",
    segment: "Other Topics",
  },
  {
    label: "60",
    title: "GraphQL",
    ring: "I am on my way to beeing confident",
    segment: "Other Topics",
  },
];

const segments = [
  { label: "Languages", color: "#8D2145" },
  { label: "Frameworks", color: "#8D2145" },
  { label: "Data Management", color: "#3DB5BE" },
  { label: "Tools", color: "#83AD78" },
  { label: "Other Topics", color: "#E88744" },
];

const rings = [
  { label: "I am confident", color: "#808080" },
  { label: "I am on my way to beeing confident", color: "#B3B3B3" },
  { label: "I know the fundametals", color: "#CCCCCC" },
  { label: "I want to learn", color: "#F2F2F2" },
];

describe("Technology Radar Test", () => {
  beforeEach(() => {
    cy.viewport(1000, 1000);
  });

  it("basic entries", () => {
    mount(
      <TechnologyRadar
        entryRadius={15}
        segments={segments}
        rings={rings}
        entries={entries}
      />
    );
  });
});
