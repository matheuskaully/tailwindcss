'use client'

import * as Input from './components/input'
import * as FileInput from './components/Form/FileInput'
import SettingsTabs from './components/SettingsTabs'
import Select from './components/Form/Select'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import SelectItem from './components/Form/Select/SelectItem'
import Button from './components/Form/button'
import Textarea from './components/Form/textarea'

const countries = [
  { value: 'AF', text: 'Afghanistan' },
  { value: 'AL', text: 'Albania' },
  { value: 'DZ', text: 'Algeria' },
  { value: 'AS', text: 'American Samoa' },
  { value: 'AD', text: 'Andorra' },
  { value: 'AO', text: 'Angola' },
  { value: 'AI', text: 'Anguilla' },
  { value: 'AQ', text: 'Antarctica' },
  { value: 'AG', text: 'Antigua and Barbuda' },
  { value: 'AR', text: 'Argentina' },
  { value: 'AM', text: 'Armenia' },
  { value: 'AW', text: 'Aruba' },
  { value: 'AU', text: 'Australia' },
  { value: 'AT', text: 'Austria' },
  { value: 'AZ', text: 'Azerbaijan' },
  { value: 'BS', text: 'Bahamas' },
  { value: 'BH', text: 'Bahrain' },
  { value: 'BD', text: 'Bangladesh' },
  { value: 'BB', text: 'Barbados' },
  { value: 'BY', text: 'Belarus' },
  { value: 'BE', text: 'Belgium' },
  { value: 'BZ', text: 'Belize' },
  { value: 'BJ', text: 'Benin' },
  { value: 'BM', text: 'Bermuda' },
  { value: 'BT', text: 'Bhutan' },
  { value: 'BO', text: 'Bolivia' },
  { value: 'BA', text: 'Bosnia and Herzegovina' },
  { value: 'BW', text: 'Botswana' },
  { value: 'BR', text: 'Brazil' },
  { value: 'BN', text: 'Brunei' },
  { value: 'BG', text: 'Bulgaria' },
  { value: 'BF', text: 'Burkina Faso' },
  { value: 'BI', text: 'Burundi' },
  { value: 'CV', text: 'Cabo Verde' },
  { value: 'KH', text: 'Cambodia' },
  { value: 'CM', text: 'Cameroon' },
  { value: 'CA', text: 'Canada' },
  { value: 'KY', text: 'Cayman Islands' },
  { value: 'CF', text: 'Central African Republic' },
  { value: 'TD', text: 'Chad' },
  { value: 'CL', text: 'Chile' },
  { value: 'CN', text: 'China' },
  { value: 'CO', text: 'Colombia' },
  { value: 'KM', text: 'Comoros' },
  { value: 'CG', text: 'Congo' },
  { value: 'CD', text: 'Congo, Democratic Republic of the' },
  { value: 'CR', text: 'Costa Rica' },
  { value: 'CI', text: "Côte d'Ivoire" },
  { value: 'HR', text: 'Croatia' },
  { value: 'CU', text: 'Cuba' },
  { value: 'CY', text: 'Cyprus' },
  { value: 'CZ', text: 'Czechia' },
  { value: 'DK', text: 'Denmark' },
  { value: 'DJ', text: 'Djibouti' },
  { value: 'DM', text: 'Dominica' },
  { value: 'DO', text: 'Dominican Republic' },
  { value: 'EC', text: 'Ecuador' },
  { value: 'EG', text: 'Egypt' },
  { value: 'SV', text: 'El Salvador' },
  { value: 'GQ', text: 'Equatorial Guinea' },
  { value: 'ER', text: 'Eritrea' },
  { value: 'EE', text: 'Estonia' },
  { value: 'SZ', text: 'Eswatini' },
  { value: 'ET', text: 'Ethiopia' },
  { value: 'FJ', text: 'Fiji' },
  { value: 'FI', text: 'Finland' },
  { value: 'FR', text: 'France' },
  { value: 'GA', text: 'Gabon' },
  { value: 'GM', text: 'Gambia' },
  { value: 'GE', text: 'Georgia' },
  { value: 'DE', text: 'Germany' },
  { value: 'GH', text: 'Ghana' },
  { value: 'GR', text: 'Greece' },
  { value: 'GD', text: 'Grenada' },
  { value: 'GU', text: 'Guam' },
  { value: 'GT', text: 'Guatemala' },
  { value: 'GN', text: 'Guinea' },
  { value: 'GW', text: 'Guinea-Bissau' },
  { value: 'GY', text: 'Guyana' },
  { value: 'HT', text: 'Haiti' },
  { value: 'HN', text: 'Honduras' },
  { value: 'HU', text: 'Hungary' },
  { value: 'IS', text: 'Iceland' },
  { value: 'IN', text: 'India' },
  { value: 'ID', text: 'Indonesia' },
  { value: 'IR', text: 'Iran' },
  { value: 'IQ', text: 'Iraq' },
  { value: 'IE', text: 'Ireland' },
  { value: 'IL', text: 'Israel' },
  { value: 'IT', text: 'Italy' },
  { value: 'JM', text: 'Jamaica' },
  { value: 'JP', text: 'Japan' },
  { value: 'JO', text: 'Jordan' },
  { value: 'KZ', text: 'Kazakhstan' },
  { value: 'KE', text: 'Kenya' },
  { value: 'KI', text: 'Kiribati' },
  { value: 'KP', text: 'Korea, North' },
  { value: 'KR', text: 'Korea, South' },
  { value: 'KW', text: 'Kuwait' },
  { value: 'KG', text: 'Kyrgyzstan' },
  { value: 'LA', text: 'Laos' },
  { value: 'LV', text: 'Latvia' },
  { value: 'LB', text: 'Lebanon' },
  { value: 'LS', text: 'Lesotho' },
  { value: 'LR', text: 'Liberia' },
  { value: 'LY', text: 'Libya' },
  { value: 'LI', text: 'Liechtenstein' },
  { value: 'LT', text: 'Lithuania' },
  { value: 'LU', text: 'Luxembourg' },
  { value: 'MG', text: 'Madagascar' },
  { value: 'MW', text: 'Malawi' },
  { value: 'MY', text: 'Malaysia' },
  { value: 'MV', text: 'Maldives' },
  { value: 'ML', text: 'Mali' },
  { value: 'MT', text: 'Malta' },
  { value: 'MH', text: 'Marshall Islands' },
  { value: 'MR', text: 'Mauritania' },
  { value: 'MU', text: 'Mauritius' },
  { value: 'MX', text: 'Mexico' },
  { value: 'FM', text: 'Micronesia' },
  { value: 'MD', text: 'Moldova' },
  { value: 'MC', text: 'Monaco' },
  { value: 'MN', text: 'Mongolia' },
  { value: 'ME', text: 'Montenegro' },
  { value: 'MA', text: 'Morocco' },
  { value: 'MZ', text: 'Mozambique' },
  { value: 'MM', text: 'Myanmar' },
  { value: 'NA', text: 'Namibia' },
  { value: 'NR', text: 'Nauru' },
  { value: 'NP', text: 'Nepal' },
  { value: 'NL', text: 'Netherlands' },
  { value: 'NZ', text: 'New Zealand' },
  { value: 'NI', text: 'Nicaragua' },
  { value: 'NE', text: 'Niger' },
  { value: 'NG', text: 'Nigeria' },
  { value: 'MK', text: 'North Macedonia' },
  { value: 'NO', text: 'Norway' },
  { value: 'OM', text: 'Oman' },
  { value: 'PK', text: 'Pakistan' },
  { value: 'PW', text: 'Palau' },
  { value: 'PA', text: 'Panama' },
  { value: 'PG', text: 'Papua New Guinea' },
  { value: 'PY', text: 'Paraguay' },
  { value: 'PE', text: 'Peru' },
  { value: 'PH', text: 'Philippines' },
  { value: 'PL', text: 'Poland' },
  { value: 'PT', text: 'Portugal' },
  { value: 'QA', text: 'Qatar' },
  { value: 'RO', text: 'Romania' },
  { value: 'RU', text: 'Russia' },
  { value: 'RW', text: 'Rwanda' },
  { value: 'KN', text: 'Saint Kitts and Nevis' },
  { value: 'LC', text: 'Saint Lucia' },
  { value: 'VC', text: 'Saint Vincent and the Grenadines' },
  { value: 'WS', text: 'Samoa' },
  { value: 'SM', text: 'San Marino' },
  { value: 'ST', text: 'Sao Tome and Principe' },
  { value: 'SA', text: 'Saudi Arabia' },
  { value: 'SN', text: 'Senegal' },
  { value: 'RS', text: 'Serbia' },
  { value: 'SC', text: 'Seychelles' },
  { value: 'SL', text: 'Sierra Leone' },
  { value: 'SG', text: 'Singapore' },
  { value: 'SK', text: 'Slovakia' },
  { value: 'SI', text: 'Slovenia' },
  { value: 'SB', text: 'Solomon Islands' },
  { value: 'SO', text: 'Somalia' },
  { value: 'ZA', text: 'South Africa' },
  { value: 'SS', text: 'South Sudan' },
  { value: 'ES', text: 'Spain' },
  { value: 'LK', text: 'Sri Lanka' },
  { value: 'SD', text: 'Sudan' },
  { value: 'SR', text: 'Suriname' },
  { value: 'SE', text: 'Sweden' },
  { value: 'CH', text: 'Switzerland' },
  { value: 'SY', text: 'Syria' },
  { value: 'TW', text: 'Taiwan' },
  { value: 'TJ', text: 'Tajikistan' },
  { value: 'TZ', text: 'Tanzania' },
  { value: 'TH', text: 'Thailand' },
  { value: 'TL', text: 'Timor-Leste' },
  { value: 'TG', text: 'Togo' },
  { value: 'TO', text: 'Tonga' },
  { value: 'TT', text: 'Trinidad and Tobago' },
  { value: 'TN', text: 'Tunisia' },
  { value: 'TR', text: 'Turkey' },
  { value: 'TM', text: 'Turkmenistan' },
  { value: 'TV', text: 'Tuvalu' },
  { value: 'UG', text: 'Uganda' },
  { value: 'UA', text: 'Ukraine' },
  { value: 'AE', text: 'United Arab Emirates' },
  { value: 'GB', text: 'United Kingdom' },
  { value: 'US', text: 'United States' },
  { value: 'UY', text: 'Uruguay' },
  { value: 'UZ', text: 'Uzbekistan' },
  { value: 'VU', text: 'Vanuatu' },
  { value: 'VE', text: 'Venezuela' },
  { value: 'VN', text: 'Vietnam' },
  { value: 'YE', text: 'Yemen' },
  { value: 'ZM', text: 'Zambia' },
  { value: 'ZW', text: 'Zimbabwe' },
]
const timezones = [
  { value: 'Pacific/Midway', text: 'Pacific/Midway (UTC-11:00)' },
  { value: 'Pacific/Niue', text: 'Pacific/Niue (UTC-11:00)' },
  { value: 'Pacific/Pago_Pago', text: 'Pacific/Pago Pago (UTC-11:00)' },
  { value: 'America/Adak', text: 'America/Adak (UTC-10:00)' },
  { value: 'Pacific/Honolulu', text: 'Pacific/Honolulu (UTC-10:00)' },
  { value: 'Pacific/Rarotonga', text: 'Pacific/Rarotonga (UTC-10:00)' },
  { value: 'Pacific/Tahiti', text: 'Pacific/Tahiti (UTC-10:00)' },
  { value: 'Pacific/Marquesas', text: 'Pacific/Marquesas (UTC-09:30)' },
  { value: 'America/Anchorage', text: 'America/Anchorage (UTC-09:00)' },
  { value: 'America/Juneau', text: 'America/Juneau (UTC-09:00)' },
  { value: 'America/Nome', text: 'America/Nome (UTC-09:00)' },
  { value: 'America/Sitka', text: 'America/Sitka (UTC-09:00)' },
  { value: 'America/Yakutat', text: 'America/Yakutat (UTC-09:00)' },
  { value: 'Pacific/Gambier', text: 'Pacific/Gambier (UTC-09:00)' },
  { value: 'America/Los_Angeles', text: 'America/Los Angeles (UTC-08:00)' },
  { value: 'America/Tijuana', text: 'America/Tijuana (UTC-08:00)' },
  { value: 'America/Vancouver', text: 'America/Vancouver (UTC-08:00)' },
  { value: 'Pacific/Pitcairn', text: 'Pacific/Pitcairn (UTC-08:00)' },
  { value: 'America/Denver', text: 'America/Denver (UTC-07:00)' },
  { value: 'America/Edmonton', text: 'America/Edmonton (UTC-07:00)' },
  { value: 'America/Phoenix', text: 'America/Phoenix (UTC-07:00)' },
  { value: 'America/Mazatlan', text: 'America/Mazatlan (UTC-07:00)' },
  { value: 'America/Chihuahua', text: 'America/Chihuahua (UTC-07:00)' },
  { value: 'America/Hermosillo', text: 'America/Hermosillo (UTC-07:00)' },
  { value: 'America/Tegucigalpa', text: 'America/Tegucigalpa (UTC-06:00)' },
  { value: 'America/Chicago', text: 'America/Chicago (UTC-06:00)' },
  { value: 'America/Mexico_City', text: 'America/Mexico City (UTC-06:00)' },
  { value: 'America/Regina', text: 'America/Regina (UTC-06:00)' },
  { value: 'America/Guatemala', text: 'America/Guatemala (UTC-06:00)' },
  { value: 'America/Costa_Rica', text: 'America/Costa Rica (UTC-06:00)' },
  { value: 'America/El_Salvador', text: 'America/El Salvador (UTC-06:00)' },
  { value: 'America/Managua', text: 'America/Managua (UTC-06:00)' },
  { value: 'America/Winnipeg', text: 'America/Winnipeg (UTC-06:00)' },
  { value: 'Pacific/Easter', text: 'Pacific/Easter (UTC-06:00)' },
  { value: 'America/Bogota', text: 'America/Bogota (UTC-05:00)' },
  { value: 'America/Lima', text: 'America/Lima (UTC-05:00)' },
  { value: 'America/Jamaica', text: 'America/Jamaica (UTC-05:00)' },
  { value: 'America/Cayman', text: 'America/Cayman (UTC-05:00)' },
  { value: 'America/New_York', text: 'America/New York (UTC-05:00)' },
  { value: 'America/Toronto', text: 'America/Toronto (UTC-05:00)' },
  { value: 'America/Havana', text: 'America/Havana (UTC-05:00)' },
  { value: 'America/Indianapolis', text: 'America/Indianapolis (UTC-05:00)' },
  {
    value: 'America/Port-au-Prince',
    text: 'America/Port-au-Prince (UTC-05:00)',
  },
  { value: 'America/Panama', text: 'America/Panama (UTC-05:00)' },
  { value: 'America/Caracas', text: 'America/Caracas (UTC-04:00)' },
  { value: 'America/Santiago', text: 'America/Santiago (UTC-04:00)' },
  { value: 'America/Asuncion', text: 'America/Asuncion (UTC-04:00)' },
  { value: 'America/Halifax', text: 'America/Halifax (UTC-04:00)' },
  { value: 'America/La_Paz', text: 'America/La Paz (UTC-04:00)' },
  { value: 'America/Guyana', text: 'America/Guyana (UTC-04:00)' },
  { value: 'America/Marigot', text: 'America/Marigot (UTC-04:00)' },
  { value: 'America/Manaus', text: 'America/Manaus (UTC-04:00)' },
  { value: 'America/Port_of_Spain', text: 'America/Port of Spain (UTC-04:00)' },
  { value: 'America/St_Kitts', text: 'America/St Kitts (UTC-04:00)' },
  { value: 'America/St_Lucia', text: 'America/St Lucia (UTC-04:00)' },
  { value: 'America/St_Thomas', text: 'America/St Thomas (UTC-04:00)' },
  { value: 'America/St_Vincent', text: 'America/St Vincent (UTC-04:00)' },
  { value: 'America/Puerto_Rico', text: 'America/Puerto Rico (UTC-04:00)' },
  { value: 'Atlantic/Bermuda', text: 'Atlantic/Bermuda (UTC-04:00)' },
  { value: 'America/Santo_Domingo', text: 'America/Santo Domingo (UTC-04:00)' },
  { value: 'America/Araguaina', text: 'America/Araguaina (UTC-03:00)' },
  {
    value: 'America/Argentina/Buenos_Aires',
    text: 'America/Argentina/Buenos Aires (UTC-03:00)',
  },
  { value: 'America/Cayenne', text: 'America/Cayenne (UTC-03:00)' },
  { value: 'America/Montevideo', text: 'America/Montevideo (UTC-03:00)' },
  { value: 'America/Recife', text: 'America/Recife (UTC-03:00)' },
  { value: 'America/Paramaribo', text: 'America/Paramaribo (UTC-03:00)' },
  { value: 'Atlantic/Stanley', text: 'Atlantic/Stanley (UTC-03:00)' },
  { value: 'America/Sao_Paulo', text: 'America/Sao Paulo (UTC-03:00)' },
  { value: 'America/Miquelon', text: 'America/Miquelon (UTC-03:00)' },
  { value: 'America/Buenos_Aires', text: 'America/Buenos Aires (UTC-03:00)' },
  { value: 'America/Montevideo', text: 'America/Montevideo (UTC-03:00)' },
  {
    value: 'America/Argentina/Ushuaia',
    text: 'America/Argentina/Ushuaia (UTC-03:00)',
  },
  {
    value: 'Atlantic/South_Georgia',
    text: 'Atlantic/South Georgia (UTC-02:00)',
  },
  { value: 'Atlantic/Cape_Verde', text: 'Atlantic/Cape Verde (UTC-01:00)' },
  { value: 'Atlantic/Azores', text: 'Atlantic/Azores (UTC-01:00)' },
  { value: 'Africa/Casablanca', text: 'Africa/Casablanca (UTC+00:00)' },
  { value: 'Africa/Abidjan', text: 'Africa/Abidjan (UTC+00:00)' },
  { value: 'Africa/Monrovia', text: 'Africa/Monrovia (UTC+00:00)' },
]
const textareaValue =
  'I am a front-end developer with experience in JavaScript, TypeScript, ReactJS, and TailwindCSS. Since childhood, I have always liked the idea of creating something, so I spent time editing videos of games like Counter-Strike and Minecraft, which developed my creative skills. Although I still enjoy games, I decided some time ago to focus on building a solid professional career.'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid-cols-form grid gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Matheus" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="Rosa" />
              </Input.Root>
            </div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Prefix>
                  <Mail className="size-5 text-zinc-500" />
                </Input.Prefix>
                <Input.Control
                  id="email"
                  type="email"
                  defaultValue="matheuskaully@gmail.com"
                />
              </Input.Root>
            </div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control
                  id="role"
                  type="text"
                  defaultValue="Administrator"
                />
              </Input.Root>
            </div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>

            <Select placeholder="Select a country...">
              {countries.map((country) => {
                return (
                  <SelectItem
                    key={country.value}
                    value={country.value}
                    text={country.text}
                  />
                )
              })}
            </Select>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>

            <Select placeholder="Select a timezone...">
              {timezones.map((timezone) => {
                return (
                  <SelectItem
                    key={timezone.value}
                    value={timezone.value}
                    text={timezone.text}
                  />
                )
              })}
            </Select>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button>
                    <Bold className="size-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button>
                    <Italic className="size-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button>
                    <Link className="size-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button>
                    <List className="size-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button>
                    <ListOrdered
                      className="size-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <Textarea
                id="bio"
                maxLength={500}
                defaultValue={textareaValue}
                placeholder="Write a short introduction of a maximum of 500 characters."
              />
            </div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
