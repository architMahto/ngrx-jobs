export interface Job {
  readonly title: string;
  readonly location: string;
  readonly type: string;
  readonly description: string;
  readonly howToApply: string;
  readonly company: string;
  readonly companyUrl: string;
  readonly companyLogo: string;
  readonly url: string;
}

export function buildJob(data: any): Job {
  return {
    title: data.title,
    location: data.location,
    type: data.type,
    description: data.description,
    howToApply: data.how_to_apply,
    company: data.company,
    companyUrl: data.company_url,
    companyLogo: data.company_logo,
    url: data.url
  };
}

export function buildJobsList(data: any): Array<Job> {
  return data.map(d => buildJob(d));
}
