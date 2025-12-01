import personalData from '../../../data/personal.json';
import skillsData from '../../../data/skills.json';
import projectsData from '../../../data/projects.json';
import certificationsData from '../../../data/certifications.json';
import socialsData from '../../../data/socials.json';

export async function getPersonalData() {
  return personalData;
}

export async function getSkillsData() {
  return skillsData;
}

export async function getProjectsData() {
  return projectsData;
}

export async function getCertificationsData() {
  return certificationsData;
}

export async function getSocialsData() {
  return socialsData;
}