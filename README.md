# craft cms

## Plugins
- **seo**
- **redactor**
- **minify**
- **link**

## Volumes

All images are on Digital Ocean and are individualised by section
See `./config/volumes.php` for names

## Tags

## Fields

### Common fields group
- **commonTitle**: plaintext, 128
- **commonDescription**: redactor, simple
- **commonLink**: link field
- **commonEmail**: email
- **commonSecondaryLink**: link field
- **commonHeaderImage**: assets, volumeHeaderImages, limit 1
- **commonEntryTitle**: plaintext, 128
- **commonEntryDescription**: redactor, simple
- **commonIcon**: assets, volumeIconImages, limit 1
- **commonColor**: dropdown [primaryBlue, orange, yellow, green, pink, oceanBlue]
- **commonSeo**: seo field
- **commonCta**: entries cta
- **commonModularBody**: matrix
	- **textBlock**: matrixBlock
		- **Content**
    		- **mxSectionTitle**: plainText, 128
    		- **mxSectionDescription**: redactor, simple
    		- **mxTextContent**: redactor
		- **Layout**
			- **mxHasShadow**: toggle
    - **splitTxtVideoBlock**: matrixBlock
		- **Content**
    		- **mxSectionTitle**: plainText, 128
    		- **mxSectionDescription**: redactor, simple
    		- **mxSplitTxtVideoId**: plaintext, 128
		- **Layout**
			- **mxSplitTxtLayout**: dropdown, ["videoLeft", "videoRight"]
			- **mxHasShadow**: toggle
	- **splitTxtImageBlock**: matrixBlock
		- **Content**
    		- **mxSectionTitle**: plainText, 128
    		- **mxSectionDescription**: redactor, simple
    		- **mxSplitTxtImage**: asset, volumeBodyImages, limit 1
		- **Layout**
			- **mxSplitTxtLayout**: dropdown, ["ImageLeft", "ImageRight"]
			- **mxHasShadow**: toggle
	- **clientsBlock**: matrixBlock
		- **Content**
    		- **mxClientsImages**: assets, volumeClientsImages, limit 5
		- **Layout**
			- **mxHasShadow**: toggle
	- **testimonialsBlock**: matrixBlock
		- **Content**
    		- **mxSectionTitle**: plainText, 128
    		- **mxSectionDescription**: redactor, simple
			- **mxTestimonialsItems**: entries testimonial
		- **Layout**
			- **mxHasShadow**: toggle
	- **entriesBlock**: matrixBlock
		- **Content**
			- **mxSectionTitle**: plainText, 128
    		- **mxSectionDescription**: redactor, simple
			- **mxEntriesCta**: link field
			- **mxEntriesItems**: entries {blog, module, solution}
		- **Layout**
			- **mxEntriesLayout**: dropdown, ["1col", "2col", "3col"]
			- **mxHasShadow**: toggle
	- **summaryBlock**: matrixBlock
		- **Content**
			- **mxSectionTitle**: plainText, 128
    		- **mxSectionDescription**: redactor, simple
			- **mxSummaryItems**: table
		- **Layout**
			- **mxHasShadow**: toggle
	- **highlightBlock**: matrixBlock
		- **Content**
			- **mxSectionTitle**: plainText, 128
    		- **mxSectionDescription**: redactor, simple
			- **mxHighlightLink**: link field
			- **mxHighlightImage**: assets, volumeHighlightImages, limit 1
		- **Layout**
			- **mxHasShadow**: toggle

### Home fields group
- **homeClientsAssets**: assets, volumeClientsImages, limit 1
- **homeVideoLink**: url, 128
- **homeVideoImage**: assets, volumeHomeVideoImages, limit 1

### Solution fields group
- **solutionModules**: superTable
	- **solutionBlock**: matrix
		- **InfoBlock**: matrixBlock
			- **mxInfoModule**: entries module, limit 1
			- **mxInfoDescription**: redactor, simple
			- **mxInfoCtaLabel**: plainText, 128
		- **mxFeaturesBlock**: matrixBlock
			- **mxFeatureTitle**: plainText, 128
			- **mxFeatureDescription**: redactor, simple

### Testimonial fields group
- **testimonialQuote**: redactor, simple
- **testimonialAuthor**: plainText, 128
- **testimonialLogo**: assets, volumeClientsImages, limit 1

### About fields group
- **aboutClients**: assets, volumeClientsImages, limit 5
- **aboutContent**: matrix
	- **columnBlock**: matrixBlock
		- **mxColumnTitle**: plainText, 128
		- **mxColumnContent**: redactor, standard
- **aboutHighlightTitle**: plainText, 128
- **aboutHiglightDescription**: redactor, simple
- **aboutHighlightLink**: link field
- **aboutVacancies**: matrix
	- **aboutVacancyBlock**: matrixBlock
		- **mxAboutVacansyTitle**: plainText, 128
		- **mxAboutVacancyDescription**: redactor, simple
		- **mxAboutVacancyLink**: link field

### Login fields group
- **loginLinks**: matrix
	- **loginLinksBlock**: matrixBlock
		- **mxLoginLink**: link field

### Blog fields group
- **blogAuthor**: entries author
- **blogBody**: matrix
	- **textBlock**: matrixBlock
		- **mxTextBlockTitle**: plainText, 128
		- **mxTextBlockContent**: redactor, simple
	- **quoteBlock**: matrixBlock
		- **mxQuoteBlockTitle**: plainText, 256
		- **mxQuoteBlockAuthor**: plainText, 128
	- **imageBlock**: matrixBlock
		- **mxImageBlockImage**: assets, volumeBlogImages, limit 1
	- **videoBlock**: matrixBlock
		- **mxVideoBlockUrl**: plainText, 128

### Author fields group
- **authorName**: plainText, 128

### Request Form fields group
- **requestFormSteps**: entries requestFormStep

### Request Form Step fields group
- **requestFormStepOptions**: matrix
	- **optionBlock**: matrixBlock
		- **mxOptionTitle**: plainText, 128
		- **mxOptionValue**: plainText, 128

### Social media fields group
- **globalSocialTwitter**: url
- **globalSocialLinkedin**: url

### Cookies fields group
- **globalCookiesTitle**: plainText, 128
- **globalCookiesDescription**: redactor, simple

### Footer fields group
- **globalFooterTitle**: plainText, 128
- **globalFooterDescription**: redactor, simple
- **globalFooterCta**: link field

### Offices fields group
- **globalOfficesTitle1**: plainText, 128
- **globalOfficesDescription1**: redactor, simple
- **globalOfficesTitle2**: plainText, 128
- **globalOfficesDescription2**: redactor, simple

### Contact fields group
- **globalContactSubjects**: entries subjectOption
- **globalContactCountries**: entries country

## Sections

### Homepage [pageHome] (Single)
- **Page**
	- **commonTitle**
	- **commonDescription**
	- **commonCta**
- **Body**
	- **commonBody**
	- **homeClientsAssets**
	- **homeVideoLink**
	- **homeVideoImage**
- **Seo**
	- **commonSeo**

### Solutions Page [pageSolutions] (Single)
- **Page**
	- **commonTitle**
	- **commonDescription**
	- **commonCta**
- **Body**
	- **commonBody**
- **Seo**
	- **commonSeo**

### Modules Page [pageModules] (Single)
- **Page**
	- **commonTitle**
	- **commonDescription**
	- **commonCta**
- **Body**
	- **commonBody**
- **Seo**
	- **commonSeo**

### About Page (pageAbout) (Single)
- **Page**
	- **commonTitle**
	- **commonDescription**
	- **commonHeaderImage**
	- **commonCta**
- **Body**
	- **aboutClients**
	- **aboutContent**
	- **aboutHighlightTitle**
	- **aboutHiglightDescription**
	- **aboutHighlightLink**
	- **commonBody**
- **Seo**
	- **commonSeo**

### Vacancies Page [pageVacancies] (Single)
- **Page**
	- **commonTitle**
	- **commonDescription**
- **Body**
	- **commonBody**
	- **aboutVacancies**
- **Seo**
	- **commonSeo**

### Contact Page [pageContact] (Single)
- **Page**
	- **commonTitle**
	- **commonDescription**
- **Seo**
	- **commonSeo**

### Request Form Page [pageRequestForm] (Single)
- **Page**
	- **commonTitle**
	- **commonDescription**
- **Body**
	- **requestFormSteps**
- **Seo**
	- **commonSeo**

### Login Page [pageLogin] (Single)
- **Page**
	- **commonTitle**
	- **commonDescription**
- **Body**
	- **loginLinks**
- **Seo**
	- **commonSeo**

### mainNavigation (Structure)
- **commonLink**

### footerNavigation (Structure)
- **commonLink**

### Pages (Channel)
- **Page**
	- **commonTitle**
	- **commonDescription**
- **Body**
	- **commonBody**
- **Seo**
	- **commonSeo**

### Solution [solution] (Channel)
- **Page**
	- **commonTitle**
	- **commonDescription**
	- **commonCta**
	- **commonLink**
- **Summary**
	- **commonSummaryTitle**
	- **commonSummaryDescription**
	- **commonIcon**
- **Body**
	- **solutionModules**
	- **commonBody**
- **Seo**
	- **commonSeo**

### Module [module] (Channel)
- **Page**
	- **Content**
		- **commonTitle**
		- **commonDescription**
		- **commonCta**
		- **commonLink**
	- **Layout**
		- **commonColor**
- **Summary**
	- **commonSummaryTitle**
	- **commonSummaryDescription**
	- **commonIcon**
- **Body**
	- **commonBody**
- **Seo**
	- **commonSeo**

### Testimonial [testimonial] (Channel)
- **Page**
	- **commonTitle**
	- **commonHeaderImage**
	- **commonLink**
- **Body**
	- **testimonialQuote**
	- **testimonialAuthor**
	- **testimonialLogo**

### Cta [cta] (Channel)
- **Page**
	- **commonTitle**
	- **commonDescription**
	- **commonLink**
	- **commonSecondaryLink**

### Blog [blog] (Channel)
- **Page**
	- **commonTitle**
	- **commonDescription**
	- **commonLink**
	- **commonHeaderImage**
- **Summary**
	- **commonSummaryTitle**
	- **commonSummaryDescription**
- **Body**
	- **blogAuthor**
	- **blogBody**

- **Seo**
	- **commonSeo**

### Author [author] (Channel)
- **authorName**

### Subject Option [subjectOption] (Channel)
- **commonTitle**
- **commonEmail**

### Country [country] (Channel)
- **commonTitle**

### Request Form Step [requestFormStep] (Channel)
- **commonColor**
- **commonTitle**
- **requestFormStepOptions**

## Globals

### Social Media [socialMedia]
- **globalSocialTwitter**
- **globalSocialLinkedin**

### Cookies [cookies]
- **globalCookiesTitle**
- **globalCookiesDescription**

### Footer [footer]
- **globalFooterTitle**
- **globalFooterDescription**
- **globalFooterCta**

### Offices [offices]
- **globalOfficesTitle1**
- **globalOfficesDescription1**
- **globalOfficesTitle2**
- **globalOfficesDescription2**

### Contact [contact]
- **globalContactSubjects**
- **globalContactCountries**
