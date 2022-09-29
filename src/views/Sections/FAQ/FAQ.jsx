import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./FAQ.scss"

const Faq = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
    faq
  } = frontmatter;

  return (
    <PageSection className={clsx("faq-section", className)} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        {
          faq.map(({ question, answer }) => (
            <div key={question}>
              <h4 className="faq-question">{question}</h4>
              <div dangerouslySetInnerHTML={{ __html: `<p className="faq-answer">${answer}</p>` }} />
            </div>
            )
          )
        }
      </Row>
    </PageSection>
  );
}

Faq.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Faq.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Faq;